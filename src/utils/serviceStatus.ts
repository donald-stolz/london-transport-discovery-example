import { ServiceStatusDetail } from "../types";

export const sortServiceByName = (
  a: ServiceStatusDetail,
  b: ServiceStatusDetail
) => {
  const modeCompare = a.modeName.localeCompare(b.modeName);
  if (modeCompare === 0) {
    return a.name.localeCompare(b.name);
  }
  return modeCompare;
};

export const hasNightService = (serviceStatus: ServiceStatusDetail) => {
  return (
    serviceStatus.serviceTypes.findIndex(({ name }) => name === "Night") >= 0
  );
};

export const getServiceDisruptions = (serviceStatus: ServiceStatusDetail) => {
  return serviceStatus.lineStatuses.filter(
    ({ statusSeverity }) => statusSeverity !== 10
  );
};
