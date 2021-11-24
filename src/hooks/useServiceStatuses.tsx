import useSWR from "swr";
import { ServiceStatusDetail } from "../types";
import { fetcher } from "../utils/fetcher";

const LineModeEndpoint =
  "https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true";

interface ServiceStatusesSWR {
  serviceStatuses: Array<ServiceStatusDetail>;
  isLoading: boolean;
  error: any;
}

const useServiceStatuses = (): ServiceStatusesSWR => {
  const { data, error } = useSWR<Array<ServiceStatusDetail>>(
    LineModeEndpoint,
    fetcher,
    {}
  );
  const isLoading = !error && !data;
  return {
    serviceStatuses: data || [],
    error,
    isLoading,
  };
};

export default useServiceStatuses;
