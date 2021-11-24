export interface ServiceStatusDetail {
  $type: string; // Comma separated
  id: string;
  name: string;
  modeName: string;
  disruptions: Array<unknown>;
  created: string; // UTC Timestamp
  modified: string; // UTC Timestamp
  lineStatuses: Array<LineStatusDetail>;
  routeSections: Array<unknown>;
  serviceTypes: Array<ServiceTypeDetail>;
  crowding: Record<string, unknown>;
}

export interface LineStatusDetail {
  $type: string; // Comma separated
  id: number;
  statusSeverity: number;
  statusSeverityDescription: string;
  created: string; // UTC Timestamp
  validityPeriods: Array<unknown>;
}

export interface ServiceTypeDetail {
  $type: string;
  name: string;
  uri: string;
}
