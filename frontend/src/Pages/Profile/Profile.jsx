import User1 from "../../assets/users/user-1.png";
import Post1 from "../../assets/articles/post-1.jpg";
import Post2 from "../../assets/articles/post-2.jpg";
import Post3 from "../../assets/articles/post-3.jpg";
import Post4 from "../../assets/articles/post-4.jpg";
import Post5 from "../../assets/articles/post-5.jpg";
import Post6 from "../../assets/articles/post-6.jpg";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/authcontext";
import useGetSingleUser from "../../Hooks/useGetSingleUser";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";

export default function Profile() {
  const { user: authUser } = useContext(AuthContext);

  const { email } = useParams();
  const { user: dbUser } = useGetSingleUser(email);

  const itsMe = authUser?.email === email;

  const axiosPublic = useAxiosPublic();
  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts", dbUser?.email], // unique key for caching
    queryFn: async () => {
      const res = await axiosPublic.get(`/my-posts/${email}`);
      return res.data;
    },
    enabled: !!dbUser?.email,
  });

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

  console.log(dbUser)

  return (
    <div className="main-container">
      <div className="profile-container">
        <div className="flex flex-col md:flex-row mb-10">
          <div className="flex justify-items-end md:justify-start md:w-1/3 mb-6 md:mb-0 relative">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-300 mx-auto">
              <img
                src={dbUser?.profilePic}
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
              <h2 className="text-xl font-normal mb-4 sm:mb-0 sm:mr-4">
                {dbUser?.userName}
              </h2>
            </div>
            <div className="flex space-x-2">
              {itsMe ? (
                <Link
                  to={`/edit-profile/${dbUser?.email}`}
                  className="bg-gray-100 px-4 py-1.5 rounded-md text-sm font-medium"
                >
                  Edit profile
                </Link>
              ) : null}
            </div>

            <div className="flex justify-center sm:justify-start space-x-8 mb-4 mt-2">
              <div>
                <span className="font-semibold">{posts.length}</span> posts
              </div>
            </div>

            <div className="text-sm">
              <p>{dbUser?.bio}</p>
              <p className="text-blue-900">
                <a
                  href={dbUser?.website}
                  target="_blank"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  {dbUser?.website}
                </a>
              </p>
            </div>
          </div>
        </div>

        <section>
          <h3 className="font-semibold text-lg mb-4">Posts</h3>
          <div className="grid grid-cols-3 gap-1">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link key={post._id} to={`/post-details/${post._id}`}>
                  <div className="relative">
                    <img
                      src={post?.image}
                      alt="Post"
                      className="w-full grid-image"
                    />
                  </div>
                </Link>
              ))
            ) : (
              <h1 className="text-3xl text-gray-600 text-center">No Posts.</h1>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
