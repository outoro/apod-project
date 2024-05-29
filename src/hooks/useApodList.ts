import { useQuery } from "@tanstack/react-query";

export const useApodList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["apodList"],
    // queryFn: () => getApodList(),
  });

  return { data, isLoading, error };
};
