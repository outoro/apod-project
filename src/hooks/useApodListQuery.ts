import { useInfiniteQuery } from "@tanstack/react-query";
import { getApodList } from "api/apodListApi";

const rowsPerPage = 70;

const queryKey = ["apods"];

const useApodListQuery = () => {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey,
      queryFn: () =>
        getApodList({
          rowsPerPage,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => lastPage + 1,
    });

  return { data, isLoading, isError, fetchNextPage, isFetchingNextPage };
};

export default useApodListQuery;
