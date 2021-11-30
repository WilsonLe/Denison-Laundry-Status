import { MachineStatus, ParsedMachineStatus, ResponseData } from './types';

const parseMachineStatus: (data: MachineStatus) => ParsedMachineStatus = (
  data
) => {
  return {
    type: data.isDryer ? 'dryer' : data.isWasher ? 'washer' : undefined,
    remainingSeconds: data.currentStatus.remainingSeconds,
    status:
      data.currentStatus.statusId === 'IN_USED'
        ? 'IN USED'
        : data.currentStatus.statusId === 'COMPLETE'
        ? 'COMPLETE'
        : data.currentStatus.statusId === 'AVAILABLE'
        ? 'AVAILABLE'
        : data.currentStatus.statusId === 'READY_TO_START'
        ? 'READY TO START'
        : 'NETWORK ERROR',
  };
};

const parseResponseData: (data: MachineStatus[]) => ResponseData = (data) => {
  const parsedMachineStatuses = data.map(parseMachineStatus);
  const dryers: ParsedMachineStatus[] = parsedMachineStatuses.filter(
    (machine) => machine.type === 'dryer'
  );
  const washers: ParsedMachineStatus[] = parsedMachineStatuses.filter(
    (machine) => machine.type === 'washer'
  );
  const availableDryers: number = dryers.filter(
    (d) => d.status === 'AVAILABLE' || d.status === 'READY TO START'
  ).length;
  const completeDryers: number = dryers.filter(
    (d) => d.status === 'COMPLETE'
  ).length;
  const inUsedDryers: number = dryers.filter(
    (d) => d.status === 'IN USED'
  ).length;
  const errorDryers: number = dryers.filter(
    (d) => d.status === 'NETWORK ERROR'
  ).length;
  const availableWasher: number = washers.filter(
    (w) => w.status === 'AVAILABLE' || w.status === 'READY TO START'
  ).length;
  const completeWashers: number = washers.filter(
    (w) => w.status === 'COMPLETE'
  ).length;
  const inUsedWashers: number = washers.filter(
    (w) => w.status === 'IN USED'
  ).length;
  const errorWashers: number = washers.filter(
    (w) => w.status === 'NETWORK ERROR'
  ).length;

  return {
    machineStatus: {
      dryers,
      washers,
      availableDryers,
      completeDryers,
      inUsedDryers,
      errorDryers,
      availableWasher,
      completeWashers,
      inUsedWashers,
      errorWashers,
      messages: `Right now, there are ${availableWasher} available washer, and ${availableDryers} available dryers`,
    },
  };
};
export { parseResponseData };
