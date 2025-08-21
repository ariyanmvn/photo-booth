import User1 from "../../assets/users/user-1.png";
export default function EditProfile() {
  return (
    <div class="edit-container">
      <h1 class="text-2xl font-bold mb-8">Edit profile</h1>

      <div class="bg-white rounded-lg p-6 mb-6">
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img
              src={User1}
              alt="Saad Hasan"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 class="font-semibold text-base">Saad Hasan</h2>
            <p class="text-gray-500">@saadh393</p>
          </div>
          <button class="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition">
            Change photo
          </button>
        </div>
      </div>

      <div class="bg-white rounded-lg p-6 mb-6">
        <label class="block mb-2 font-medium">Website</label>
        <input type="text" class="form-input mb-2" value="saadh393.github.io" />
        <p class="text-gray-500 text-xs">
          Editing your links is only available on mobile. Visit the PhotoBooth
          app and edit your profile to change the websites in your bio.
        </p>
      </div>

      <div class="bg-white rounded-lg p-6 mb-6">
        <label class="block mb-2 font-medium">Bio</label>
        <textarea class="form-input resize-none h-24 mb-1">
          Pain Demands to be Felt
        </textarea>
        <div class="flex justify-end">
          <span class="text-gray-500 text-xs">23 / 150</span>
        </div>
      </div>

      <div class="bg-white rounded-lg p-6 mb-6">
        <label class="block mb-2 font-medium">Gender</label>
        <div class="relative">
          <select class="form-input appearance-none pr-8">
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
          </div>
        </div>
        <p class="text-gray-500 text-xs mt-2">
          This won't be part of your public profile.
        </p>
      </div>

      <div class="bg-white rounded-lg p-6 mb-6">
        <h2 class="font-medium text-lg mb-4">Change Password</h2>

        <div class="mb-4">
          <label class="block mb-2 text-sm">Current Password</label>
          <div class="relative">
            <input
              type="password"
              class="form-input pr-10"
              placeholder="Enter your current password"
            />
            <button class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
              Show
            </button>
          </div>
        </div>

        <div class="mb-4">
          <label class="block mb-2 text-sm">New Password</label>
          <div class="relative">
            <input
              type="password"
              class="form-input pr-10 mb-1"
              placeholder="Enter new password"
            />
            <button class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
              Show
            </button>
          </div>

          <div class="flex w-full h-1 mb-1">
            <div class="password-strength bg-red-500 w-1/4"></div>
            <div class="password-strength bg-orange-500 w-1/4"></div>
            <div class="password-strength bg-yellow-500 w-1/4"></div>
            <div class="password-strength bg-green-500 w-1/4"></div>
          </div>
          <p class="text-xs text-gray-500 mb-3">
            For a strong password, use at least 8 characters with a mix of
            letters, numbers, and symbols.
          </p>
        </div>

        <div class="mb-4">
          <label class="block mb-2 text-sm">Confirm New Password</label>
          <div class="relative">
            <input
              type="password"
              class="form-input pr-10"
              placeholder="Confirm new password"
            />
            <button class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
              Show
            </button>
          </div>
        </div>

        <button class="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition">
          Change Password
        </button>

        <div class="mt-4 pt-4 border-t border-gray-200">
          <p class="text-xs text-gray-500">
            After changing your password, you'll be logged out of all devices
            except the ones you're using now.
          </p>
        </div>
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
          Submit
        </button>
      </div>
    </div>
  );
}
