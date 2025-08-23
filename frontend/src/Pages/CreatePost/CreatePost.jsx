import { useForm } from "react-hook-form";
import User1 from "../../assets/users/user-1.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/authcontext";
import useGetSingleUser from "../../Hooks/useGetSingleUser";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/utils";
export default function CreatePost() {
  const { user: authUser } = useContext(AuthContext);
  const { user: dbUser } = useGetSingleUser(authUser?.email);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { caption, image } = data;
    if (
      !caption ||
      caption.trim().length === 0 ||
      !image ||
      image.length === 0
    ) {
      return toast.error("You have to fill all fields");
    }
    let photo = preview;

    if (image && image[0]) {
      photo = await imageUpload(image[0]);
    }
    const postData = {
      author: dbUser,
      caption,
      image: photo,
      likes: [],
      comments: [],
      createdAt: Date.now(),
    };
    try {
      const response = await axiosPublic.post("/posts", postData);
      if (response.data.insertedId) {
        toast.success("Posted Successfully");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <header class="h-14 border-b flex items-center justify-between px-4">
        <button class="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <h1 class="text-base font-semibold">Create new post</h1>
        <button
          type="submit"
          disabled={isSubmitting}
          class="text-blue-500  cursor-pointer font-semibold"
        >
          {isSubmitting ? "Posting" : "Post"}
        </button>
      </header>

      <div class="upload-container flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 bg-gray-100 flex items-center justify-center relative">
          <img src={preview} alt="Upload preview" class="image-preview" />

          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <input
              {...register("image", { required: "Image is required" })}
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                }
              }}
              placeholder="Click to upload photo"
              class="bg-black bg-opacity-75 text-white text-sm py-1 px-3 rounded-md"
            />
            {errors?.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors?.email?.message}
              </p>
            )}
          </div>
        </div>

        <div class="w-full md:w-1/2 bg-white flex flex-col">
          <div class="flex items-center p-4 border-b">
            <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
              <img
                src={dbUser?.profilePic}
                alt="User avatar"
                class="w-full h-full object-cover"
              />
            </div>
            <span class="ml-3 font-semibold text-sm">{dbUser?.userName}</span>
          </div>

          <div class="p-4 border-b flex-grow">
            <div class="mb-2">
              <p class="font-medium text-base mb-2">Caption Section</p>
              <textarea
                {...register("caption", { required: "Caption is required" })}
                class="w-full caption-input border-0 outline-none text-sm"
                placeholder="Write a caption..."
              ></textarea>
              {errors?.caption && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.email?.message}
                </p>
              )}
            </div>

            <div class="flex justify-between items-center">
              <button class="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <span class="text-gray-400 text-xs">15/2,200</span>
            </div>
          </div>

          <div class="flex flex-col">
            <button class="flex items-center justify-between p-4 border-b">
              <span class="text-base text-gray-600">Add location</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>

            <button class="flex items-center justify-between p-4 border-b">
              <span class="text-base text-gray-600">Add collaborators</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>

            <button class="flex items-center justify-between p-4 border-b">
              <span class="text-base text-gray-600">Accessibility</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <button class="flex items-center justify-between p-4 border-b">
              <span class="text-base text-gray-600">Advanced settings</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
