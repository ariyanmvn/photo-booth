import { useQuery } from "@tanstack/react-query";
import Post from "./Post";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import LoadingSpinner from "./LoadingSpinner";

export default function PostsFeed() {
  const axiosPublic = useAxiosPublic();
  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"], // unique key for caching
    queryFn: async () => {
      const res = await axiosPublic.get("/posts");
      return res.data;
    },
  });
  console.log(posts);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return (
      <div className="text-red-500 text-3xl font-bold text-center">
        {error.message}
      </div>
    );
  }
  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post}/>
      ))}
    </div>
  );
}
