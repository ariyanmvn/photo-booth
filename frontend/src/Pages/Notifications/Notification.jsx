import User1 from "../../assets/users/user-1.png";
import User2 from "../../assets/users/user-2.png";
import User3 from "../../assets/users/user-3.png";
export default function Notification() {
  return (
    <div class="notifications-container">
      <header class="sticky top-0 bg-white  z-10">
        <div class="flex items-center justify-between p-4">
          <h1 class="text-lg font-semibold">Notifications</h1>
        </div>
      </header>

      <div class="notifications-list">
        <div class="px-4 py-3 border-b border-gray-100">
          <h2 class="text-base font-semibold">Today</h2>
        </div>

        <div class="notification-item flex items-center p-4 border-b border-gray-100">
          <div class="relative">
            <div class="w-11 h-11 rounded-full overflow-hidden mr-3">
              <img
                src={User1}
                alt="User avatar"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="flex-1 mr-3">
            <p class="text-sm">
              <span class="font-semibold">john_doe</span> liked your photo.
            </p>
            <p class="text-xs text-gray-500 mt-1">2m</p>
          </div>
          <div class="w-11 h-11 rounded overflow-hidden">
            <img src={User1} alt="Post thumbnail" class="post-thumbnail" />
          </div>
        </div>

        <div class="notification-item flex items-center p-4 border-b border-gray-100">
          <div class="relative">
            <div class="w-11 h-11 rounded-full overflow-hidden mr-3">
              <img
                src={User1}
                alt="User avatar"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="flex-1 mr-3">
            <p class="text-sm">
              <span class="font-semibold">sarah_wilson</span> commented:
              "Amazing shot! 🔥"
            </p>
            <p class="text-xs text-gray-500 mt-1">5m</p>
          </div>
          <div class="w-11 h-11 rounded overflow-hidden">
            <img src={User1} alt="Post thumbnail" class="post-thumbnail" />
          </div>
        </div>

        <div class="notification-item flex items-center p-4 border-b border-gray-100">
          <div class="relative mr-3">
            <div class="w-11 h-11 rounded-full overflow-hidden">
              <img
                src={User1}
                alt="User avatar"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="flex-1 mr-3">
            <p class="text-sm">
              <span class="font-semibold">emma_jones</span> liked your photo.
            </p>
            <p class="text-xs text-gray-500 mt-1">1h</p>
          </div>
          <div class="w-11 h-11 rounded overflow-hidden">
            <img src={User1} alt="Post thumbnail" class="post-thumbnail" />
          </div>
        </div>

        <div class="px-4 py-3 border-b border-gray-100">
          <h2 class="text-base font-semibold">Yesterday</h2>
        </div>

        <div class="notification-item flex items-center p-4 border-b border-gray-100">
          <div class="w-11 h-11 rounded-full overflow-hidden mr-3">
            <img
              src={User2}
              alt="User avatar"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1 mr-3">
            <p class="text-sm">
              <span class="font-semibold">lisa_travel</span> liked your story.
            </p>
            <p class="text-xs text-gray-500 mt-1">1d</p>
          </div>
          <div class="w-11 h-11 rounded overflow-hidden border-2 border-gray-300">
            <img
              src={User2}
              alt="Story thumbnail"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="notification-item flex items-center p-4 border-b border-gray-100">
          <div class="w-11 h-11 rounded-full overflow-hidden mr-3">
            <img
              src={User3}
              alt="User avatar"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1 mr-3">
            <p class="text-sm">
              <span class="font-semibold">anna_fitness</span> replied to your
              comment: "Thanks for the tip!"
            </p>
            <p class="text-xs text-gray-500 mt-1">1d</p>
          </div>
          <div class="w-11 h-11 rounded overflow-hidden">
            <img src={User3} alt="Post thumbnail" class="post-thumbnail" />
          </div>
        </div>

        <div class="px-4 py-3 border-b border-gray-100">
          <h2 class="text-base font-semibold">This Week</h2>
        </div>

        <div class="notification-item flex items-center p-4 border-b border-gray-100">
          <div class="relative mr-3">
            <div class="w-11 h-11 rounded-full overflow-hidden">
              <img
                src={User1}
                alt="User avatar"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="flex-1 mr-3">
            <p class="text-sm">
              <span class="font-semibold">tom_artist</span> and{" "}
              <span class="font-semibold">3 others</span> commented on your
              photo.
            </p>
            <p class="text-xs text-gray-500 mt-1">3d</p>
          </div>
          <div class="w-11 h-11 rounded overflow-hidden">
            <img src={User1} alt="Post thumbnail" class="post-thumbnail" />
          </div>
        </div>

        <div class="notification-item flex items-center p-4 border-b border-gray-100">
          <div class="w-11 h-11 rounded-full overflow-hidden mr-3">
            <img
              src={User1}
              alt="User avatar"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1 mr-3">
            <p class="text-sm">
              <span class="font-semibold">maria_design</span> liked your
              comment: "Love this aesthetic!"
            </p>
            <p class="text-xs text-gray-500 mt-1">6d</p>
          </div>
          <div class="w-11 h-11 rounded overflow-hidden">
            <img src={User1} alt="Post thumbnail" class="post-thumbnail" />
          </div>
        </div>

        <div class="h-20"></div>
      </div>
    </div>
  );
}
