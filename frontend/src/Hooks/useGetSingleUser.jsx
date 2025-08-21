import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetSingleUser = (email) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user", email], // cache based on email
    enabled: !!email, // only run if email is provided
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${email}`);
      return res.data;
    },
  });

  return { user, isLoading, error, refetch };
};

export default useGetSingleUser;
