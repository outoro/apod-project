import { useQuery } from "@tanstack/react-query";
import { getApodList } from "../api/apodListApi";
import { useState } from "react";

export const useApodList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["apodList"],
    queryFn: () => getApodList(),
  });

  return { isLoading, error, data };
};
