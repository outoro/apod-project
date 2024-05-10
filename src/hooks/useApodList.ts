import { useQuery } from "@tanstack/react-query";
import { getApodList } from "../api/apodListApi";

export const useApodList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["apodList"],
    queryFn: () => getApodList(),
  });

  return { data, isLoading, error };
};
