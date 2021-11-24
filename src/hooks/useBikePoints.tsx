import useSWR from "swr";
import { BikePoint } from "../types";
import { fetcher } from "../utils/fetcher";

const BikePointSearchEndpoint =
  "https://api.tfl.gov.uk/BikePoint/Search?query=";

interface BikePointsSWR {
  bikePoints: Array<BikePoint>;
  isLoading: boolean;
  error: any;
}

const buildSearchQuery = (query: string) => {
  if (typeof query === "string" && query !== "") {
    return BikePointSearchEndpoint + query;
  }
  return null;
};

const useBikePoints = (searchQuery: string): BikePointsSWR => {
  const { data, error } = useSWR<Array<BikePoint>>(
    buildSearchQuery(searchQuery),
    fetcher,
    {}
  );
  const isLoading = !error && !data && searchQuery !== "";
  return {
    bikePoints: data || [],
    error,
    isLoading,
  };
};

export default useBikePoints;
