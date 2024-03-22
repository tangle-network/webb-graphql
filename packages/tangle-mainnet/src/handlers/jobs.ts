import { SubstrateEvent } from '@subql/types';

import { getDateAfterNumOfBlocks } from '../utils/date';
import { FollowingJob, Phase1Job, ValidatorReward, RoleType } from '../types';
import { ensureBlock } from './block';

export async function ensureJob(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const jobId = event.event.data[0].toString();
  const roleType = JSON.parse(event.event.data[1].toString());
  const details = JSON.parse(event.event.data[2].toString());

  const isTxRelay = 'lightClientRelaying' in roleType;
  const isTssPhase1 = 'dkgtssPhaseOne' in details.jobType;
  const isZkSaasPhase1 = 'zksaasPhaseOne' in details.jobType;

  if (isTxRelay || isTssPhase1 || isZkSaasPhase1) {
    let phase1Job = await Phase1Job.get(jobId);
    if (phase1Job) return;

    phase1Job = new Phase1Job(jobId);
    // Role Type
    if (isTxRelay) phase1Job.roleType = RoleType.LightClientRelaying;
    if (isTssPhase1) phase1Job.roleType = RoleType.Tss;
    if (isZkSaasPhase1) phase1Job.roleType = RoleType.ZkSaaS;

    // Role Specific Type
    if (isTssPhase1) phase1Job.roleSpecificType = details.jobType.dkgtssPhaseOne.roleType;
    if (isZkSaasPhase1) phase1Job.roleSpecificType = details.jobType.zksaasPhaseOne.roleType;

    // Participants
    let participants: string[] | undefined;
    if (isTssPhase1) participants = details.jobType.dkgtssPhaseOne.participants;
    if (isZkSaasPhase1) participants = details.jobType.zksaasPhaseOne.participants;
    phase1Job.participants = participants;

    // Threshold
    if (isTssPhase1) phase1Job.threshold = details.jobType.dkgtssPhaseOne.threshold;

    // Permitted Caller
    if (isTssPhase1) phase1Job.permittedCaller = details.jobType.dkgtssPhaseOne.permittedCaller;
    if (isZkSaasPhase1) phase1Job.permittedCaller = details.jobType.zksaasPhaseOne.permittedCaller;

    // Earnings
    let fee: number | null = null;
    if (isTssPhase1) fee = JSON.parse((await api.query.jobs.submittedJobs('tss', +jobId)) as any).fee;
    // TODO: test with zksaas phase 1
    if (isZkSaasPhase1) fee = JSON.parse((await api.query.jobs.submittedJobs('ZkSaaS', +jobId)) as any).fee;
    // TODO: test with lightClientRelaying
    if (isTxRelay) fee = JSON.parse((await api.query.jobs.submittedJobs('LightClientRelaying', +jobId)) as any).fee;
    logger.info(`alo fee: ${fee}`);
    phase1Job.earnings =
      typeof fee === 'number' && participants && participants.length > 0 ? fee / participants.length : null;

    // Other Details
    phase1Job.creationBlockNumber = block.number;
    phase1Job.expiryBlockNumber = details.expiry;
    phase1Job.ttlBlockNumber = details.ttl;
    phase1Job.createdAt = block.timestamp;
    phase1Job.endAt = getDateAfterNumOfBlocks(block.timestamp, Number(details.ttl) - Number(block.number));

    phase1Job.isResultSubmitted = false;
    await phase1Job.save();
  }
  // TODO: test when submitting a phase 2 job
  else if (
    'dkgtssPhaseTwo' in details.jobType ||
    'dkgtssPhaseThree' in details.jobType ||
    'dkgtssPhaseFour' in details.jobType ||
    'zksaasPhaseTwo' in details.jobType
  ) {
    let followingJob = await FollowingJob.get(jobId);
    if (followingJob) return;
    followingJob = new FollowingJob(jobId);

    // Phase One Id
    if ('dkgtssPhaseTwo' in details.jobType) followingJob.phase1JobId = details.jobType.dkgtssPhaseTwo.phaseOneId;
    if ('dkgtssPhaseThree' in details.jobType) followingJob.phase1JobId = details.jobType.dkgtssPhaseThree.phaseOneId;
    if ('dkgtssPhaseFour' in details.jobType) followingJob.phase1JobId = details.jobType.dkgtssPhaseFour.phaseOneId;
    if ('zksaasPhaseTwo' in details.jobType) followingJob.phase1JobId = details.jobType.zksaasPhaseTwo.phaseOneId;

    // Other details
    followingJob.txHash = event.createdAtHash.toString();
    followingJob.creationBlockNumber = block.number;
    followingJob.expiryBlockNumber = details.expiry;
    followingJob.ttlBlockNumber = details.ttl;
    followingJob.createdAt = block.timestamp;
    followingJob.endAt = getDateAfterNumOfBlocks(block.timestamp, Number(details.ttl) - Number(block.number));
    followingJob.isResultSubmitted = false;

    await followingJob.save();
  }
}

export async function updateJobResultSubmitted(event: SubstrateEvent) {
  const jobId = event.event.data[0].toString();

  const phase1Job = await Phase1Job.get(jobId);
  const followingJob = await FollowingJob.get(jobId);
  if (!phase1Job && !followingJob) {
    return;
  }
  if (phase1Job) {
    phase1Job.isResultSubmitted = true;
    await phase1Job.save();
  } else if (followingJob) {
    followingJob.isResultSubmitted = true;
    await followingJob.save();
  }
}

export async function ensureValidatorRewardLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;
  let validatorReward = await ValidatorReward.get(recordId);

  if (validatorReward) return;

  validatorReward = new ValidatorReward(recordId);
  validatorReward.identityId = event.event.data[0].toString();
  validatorReward.reward = BigInt(event.event.data[1].toString());
  validatorReward.blockNumber = block.number;
  await validatorReward.save();
}
