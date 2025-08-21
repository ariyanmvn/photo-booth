import { useContext, useState } from "react";
import User1 from "../../assets/users/user-1.png";
import { AuthContext } from "../../Context/authcontext";
import useGetSingleUser from "../../Hooks/useGetSingleUser";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../api/utils";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
export default function EditProfile() {
  const { user: authUser, updateUserProfile } = useContext(AuthContext);
  const { user: dbUser } = useGetSingleUser(authUser?.email);

  const [preview, setPreview] = useState(dbUser?.profilePic || "");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const { image, website, bio, gender } = data;

    try {
      let profilePic = preview;

      if (image && image[0]) {
        profilePic = await imageUpload(image[0]);
      }

      const updatedData = {
        profilePic,
        bio,
        website,
        gender,
      };

      const res = await updateUserProfile({
        displayName: dbUser?.userName,
        photoURL: profilePic,
      });
      console.log(res);

      const response = await axiosPublic.put(
        `/users/${dbUser?.email}`,
        updatedData
      );
      console.log(response.data);
      toast.success("profile updated successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="edit-container">
      <h1 class="text-2xl font-bold mb-8">Edit profile</h1>

      <div class="bg-white rounded-lg p-6 mb-6">
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img
              src={preview}
              alt={dbUser?.userName || "profile pic"}
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 class="font-semibold text-base">{dbUser?.userName}</h2>
            <p class="text-gray-500">{"@" + dbUser?.email.split("@")[0]}</p>
          </div>
          <input
            {...register("image")}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setPreview(URL.createObjectURL(file));
              }
            }}
            accept="image/*"
            type="file"
            class="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition"
          />
        </div>
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div class="bg-white rounded-lg p-6 mb-6">
        <label class="block mb-2 font-medium">Website</label>
        <input
          {...register("website")}
          type="text"
          class="form-input mb-2"
          placeholder="enter your website link"
          defaultValue={dbUser?.bio || ""}
        />
        <p class="text-gray-500 text-xs">
          Editing your links is only available on mobile. Visit the PhotoBooth
          app and edit your profile to change the websites in your bio.
        </p>

        {errors.website && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div class="bg-white rounded-lg p-6 mb-6">
        <label class="block mb-2 font-medium">Bio</label>
        <textarea
          {...register("bio")}
          placeholder="type your bio here"
          class="form-input resize-none h-24 mb-1"
        >
          {dbUser?.bio || ""}
        </textarea>
        <div class="flex justify-end">
          <span class="text-gray-500 text-xs">23 / 150</span>
        </div>
        {errors.bio && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div class="bg-white rounded-lg p-6 mb-6">
        <label class="block mb-2 font-medium">Gender</label>
        <div class="relative">
          <select
            {...register("gender")}
            placeholder="select your gender"
            class="form-input appearance-none pr-8"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
            <option>Custom</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>

            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <p class="text-gray-500 text-xs mt-2">
          This won't be part of your public profile.
        </p>
      </div>

      <div class="mb-6">
        <p class="text-gray-500 text-sm">
          Certain profile info, like your name, bio and links, is visible to
          everyone.
          <a href="#" class="text-blue-500">
            See what profile info is visible
          </a>
        </p>
      </div>

      <div class="flex justify-end">
        <button class="bg-blue-100 text-blue-500 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
