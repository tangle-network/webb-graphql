import { SubstrateEvent } from '@subql/types';

import { getDateAfterNumOfBlocks } from '../utils/date';
import { Phase1Job, ValidatorReward, RoleType } from '../types';
import { ensureBlock } from './block';

export async function ensureJob(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const phase1JobId = event.event.data[0].toString();
  let phase1Job = await Phase1Job.get(phase1JobId);

  const roleType = JSON.parse(event.event.data[1].toString());
  const details = JSON.parse(event.event.data[2].toString());

  const isTxRelay = 'lightClientRelaying' in roleType;
  const isTssPhase1 = 'dkgtssPhaseOne' in details.jobType;
  const isZkSaasPhase1 = 'zksaasPhaseOne' in details.jobType;

  if (isTxRelay || isTssPhase1 || isZkSaasPhase1) {
    if (phase1Job) return;

    phase1Job = new Phase1Job(phase1JobId);
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
    const jobInfo = (await api.query.jobs.submittedJobs('Tss', phase1JobId)) as any;
    logger.info(`fee$$$: ${jobInfo.unwrap()}`);
    const fee = jobInfo.unwrap().fee;
    // if (isTssPhase1) fee = ((await api.query.jobs.submittedJobs('Tss', phase1JobId)) as any).unwrap().fee;
    // if (isZkSaasPhase1) fee = ((await api.query.jobs.submittedJobs('ZkSaaS', phase1JobId)) as any).unwrap().fee;
    // if (isTxRelay) fee = ((await api.query.jobs.submittedJobs('LightClientRelaying', phase1JobId)) as any).unwrap().fee;
    phase1Job.earnings = participants && participants.length > 0 ? fee / participants.length : null;

    phase1Job.creationBlockNumber = block.number;
    phase1Job.expiryBlockNumber = details.expiry;
    phase1Job.ttlBlockNumber = details.ttl;
    phase1Job.createdAt = block.timestamp;
    phase1Job.endAt = getDateAfterNumOfBlocks(block.timestamp, Number(details.ttl) - Number(block.number));

    phase1Job.isResultSubmitted = false;
    phase1Job.numOfJobs = 0;
  } else {
    if (!phase1Job) return;
    phase1Job.numOfJobs += 1;
    // TODO: handle sub jobs
  }

  await phase1Job.save();
}

export async function updateJobResultSubmitted(event: SubstrateEvent) {
  const phase1JobId = event.event.data[0].toString();

  const phase1Job = await Phase1Job.get(phase1JobId);
  if (!phase1Job) return;
  phase1Job.isResultSubmitted = true;

  await phase1Job.save();
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
