import { SubstrateEvent } from '@subql/types';

import {
  ValidatorRewardLog,
  Job,
  DkgKeyType,
  DKGTSSPhaseOneJob,
  DKGTSSPhaseTwoJob,
  ZkSaaSPhaseOneJob,
  ZkSaaSPhaseOneJobSystem,
  ZkSaaSPhaseTwoJob,
  ZkSaaSPhaseTwoJobRequest,
  JobResultSubmittedLog,
  JobType,
  JobKey,
} from '../types';
import { ensureBlock } from './block';

export async function ensureJob(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const jobId = event.event.data[0].toString();
  let jobSubmission = await Job.get(jobId);

  if (jobSubmission) return;

  jobSubmission = new Job(jobId);
  jobSubmission.jobKey = event.event.data[1].toString() as JobKey;
  jobSubmission.createAtBlock = block.number;
  jobSubmission.isResultSubmitted = false;

  const jobDetails = JSON.parse(event.event.data[2].toString());
  jobSubmission.expiryBlockNumber = BigInt(jobDetails.expiry);

  let ensureSpecificJob: Promise<void> | undefined;
  const jobTypeDetails = jobDetails.jobType;
  if ('dkgtssPhaseOne' in jobTypeDetails) {
    jobSubmission.jobType = JobType.DKGTSSPhaseOne;
    ensureSpecificJob = ensureDKGTSSPhaseOneJob(jobId, jobTypeDetails.dkgtssPhaseOne);
  } else if ('dkgtssPhaseTwo' in jobTypeDetails) {
    jobSubmission.jobType = JobType.DKGTSSPhaseTwo;
    ensureSpecificJob = ensureDKGTSSPhaseTwoJob(jobId, jobTypeDetails.dkgtssPhaseTwo);
  } else if ('zkSaaSPhaseOne' in jobTypeDetails) {
    jobSubmission.jobType = JobType.ZkSaaSPhaseOne;
    ensureSpecificJob = ensureZkSaaSPhaseOneJob(jobId, jobTypeDetails.zkSaaSPhaseOne);
  } else if ('zkSaaSPhaseTwo' in jobTypeDetails) {
    jobSubmission.jobType = JobType.ZkSaaSPhaseTwo;
    ensureSpecificJob = ensureZkSaaSPhaseTwoJob(jobId, jobTypeDetails.zkSaaSPhaseTwo);
  }

  await Promise.all([jobSubmission.save(), ensureSpecificJob]);
}

export async function ensureJobResultSubmittedLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const jobId = event.event.data[0].toString();

  const job = await Job.get(jobId);
  let log = await JobResultSubmittedLog.get(`${block.id}-${event.idx}`);
  if (!job || log) return;
  job.isResultSubmitted = true;

  log = new JobResultSubmittedLog(`${block.id}-${event.idx}`);
  log.jobId = jobId;
  log.jobKey = event.event.data[1].toString() as JobKey;
  log.blockNumber = block.number;

  await Promise.all([job.save(), log.save()]);
}

export async function ensureValidatorRewardLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;
  let validatorReward = await ValidatorRewardLog.get(recordId);

  if (validatorReward) return;

  validatorReward = new ValidatorRewardLog(recordId);
  validatorReward.accountId = event.event.data[0].toString();
  validatorReward.reward = BigInt(event.event.data[1].toString());
  validatorReward.blockNumber = block.number;
  await validatorReward.save();
}

async function ensureDKGTSSPhaseOneJob(
  jobId: string,
  jobDetails: {
    participants: string[];
    threshold: number;
    permittedCallerId: string | null;
    keyType: DkgKeyType;
  }
) {
  let dkgtss1Job = await DKGTSSPhaseOneJob.get(jobId);

  if (dkgtss1Job) return;

  dkgtss1Job = new DKGTSSPhaseOneJob(jobId);
  dkgtss1Job.participants = jobDetails.participants;
  dkgtss1Job.threshold = jobDetails.threshold;
  dkgtss1Job.permittedCallerId = jobDetails.permittedCallerId;
  dkgtss1Job.keyType = jobDetails.keyType;
  await dkgtss1Job.save();
}

async function ensureDKGTSSPhaseTwoJob(
  jobId: string,
  jobDetails: {
    phaseOneId: number;
    submission: number[];
  }
) {
  let dkgtss2Job = await DKGTSSPhaseTwoJob.get(jobId);

  if (dkgtss2Job) return;

  dkgtss2Job = new DKGTSSPhaseTwoJob(jobId);
  dkgtss2Job.phaseOneId = jobDetails.phaseOneId;
  dkgtss2Job.submission = jobDetails.submission;
  await dkgtss2Job.save();
}

async function ensureZkSaaSPhaseOneJob(
  jobId: string,
  jobDetails: {
    participants: string[];
    permittedCallerId: string | null;
    system: ZkSaaSPhaseOneJobSystem;
  }
) {
  let zksaas1Job = await ZkSaaSPhaseOneJob.get(jobId);

  if (zksaas1Job) return;

  zksaas1Job = new ZkSaaSPhaseOneJob(jobId);
  zksaas1Job.participants = jobDetails.participants;
  zksaas1Job.permittedCallerId = jobDetails.permittedCallerId;
  zksaas1Job.system = jobDetails.system;

  await zksaas1Job.save();
}

async function ensureZkSaaSPhaseTwoJob(
  jobId: string,
  jobDetails: {
    phaseOneId: number;
    request: ZkSaaSPhaseTwoJobRequest;
  }
) {
  let zksaas2Job = await ZkSaaSPhaseTwoJob.get(jobId);

  if (zksaas2Job) return;

  zksaas2Job = new ZkSaaSPhaseTwoJob(jobId);
  zksaas2Job.phaseOneId = jobDetails.phaseOneId;
  zksaas2Job.request = jobDetails.request;

  await zksaas2Job.save();
}
