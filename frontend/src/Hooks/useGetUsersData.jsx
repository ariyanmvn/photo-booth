import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic"; // your axios hook

const useGetUsersData = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: users = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"], // unique key for caching
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  return { users, isLoading, error, refetch };
};

export default useGetUsersData;
