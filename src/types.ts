export type RequestBody = {
  room: string;
};

export type ResponseData = {
  error?: string;
  machineStatus?: {
    dryers: ParsedMachineStatus[];
    washers: ParsedMachineStatus[];
    availableDryers: number;
    completeDryers: number;
    inUsedDryers: number;
    errorDryers: number;
    availableWasher: number;
    completeWashers: number;
    inUsedWashers: number;
    errorWashers: number;
    messages: string;
  };
};

export type ParsedMachineStatus = {
  type: 'washer' | 'dryer' | undefined;
  remainingSeconds: number;
  status:
    | 'IN USED'
    | 'COMPLETE'
    | 'AVAILABLE'
    | 'READY TO START'
    | 'NETWORK ERROR';
};

export type HallNumber = {
  [key: string]: number;
};
type RoomName =
  | 'Schaffer House'
  | 'Beaver Hall'
  | 'Beta House'
  | 'Chamberlin House'
  | 'Crawford Hall - 2nd'
  | 'Crawford Hall - lower'
  | 'Curtis Hall'
  | 'East Hall'
  | 'Lower Elm'
  | 'Upper Elm'
  | 'Gilpatrick House'
  | 'Hayes Appartment'
  | 'Huffman Hall'
  | 'Kappa Sigma'
  | 'King Hall'
  | 'Morrow House'
  | 'Moshier-Huchison House'
  | 'Preston House'
  | 'Sawyer Hall'
  | 'Shaw Hall'
  | 'Shepardson Hall'
  | 'Silverstein Apartments - 2nd'
  | 'Silverstein Apartments - 4th'
  | 'Smith Hall'
  | 'Stone Hall'
  | 'Pratt Hall'
  | 'Brown Hall'
  | 'Myers Hall'
  | 'Good Hall'
  | 'Sunset House'
  | 'Taylor House'
  | 'Wright Apartments';

export type MachineStatus = {
  id: string;
  room: {
    id: string;
    roomName: RoomName;
  };
  isDryer: boolean;
  isActive: boolean;
  isWasher: boolean;
  controlId: string;
  createdAt: string;
  createdBy: number | null;
  updatedAt: string;
  updatedBy: number | null;
  isExternal: boolean;
  machineName: string;
  machineType: {
    id: string;
    isDryer: boolean;
    isWasher: boolean;
    typeName: string;
  };
  modelNumber: string;
  networkNode: string;
  organization: {
    id: string;
    userRoleType: {
      id: string;
    };
    organizationName: string;
  };
  serialNumber: string;
  userRoleType: {
    id: string;
  };
  machineNumber: string;
  machineAuditType: {
    id: string;
    typeName: string;
  };
  machineGeneration: string | null;
  networkController: string | null;
  machineAuditGroupType: {
    id: string;
    typeName: string;
  };
  currentStatus: {
    canTopOff: boolean;
    controlId: string;
    createdAt: string;
    displayStatus: {
      id: string;
      times: number[];
      values: string[];
    };
    gatewayName: string;
    id: string;
    isDoorOpen: boolean;
    linkQualityIndicator: number;
    receivedAt: string;
    remainingSeconds: number;
    remainingVend: number;
    roomId: string;
    selectedCycle: {
      id: number;
      name: string;
    };
    selectedModifier: {
      id: number;
      name: string;
    };
    statusId: string;
    topOffTime: number;
    topOffVend: number;
    uuid: string;
  };
  ordinalValue: null;
};
