import { Link } from "react-router-dom";
import "./register.css";
import Logo from "../../assets/logo-2.svg"

export default function Register() {
  return (
    <div class="min-h-screen flex flex-col justify-center py-8 sm:px-6 lg:px-8">
      <div class="signup-container">
        <div class="flex justify-center mb-4">
          <img src={Logo} alt="PhotoBooth" class="h-[51px]" />
        </div>

        <div class="bg-white p-6 border border-gray-300 mb-3">
          <h2 class="text-center font-semibold text-gray-500 text-lg mb-4">
            Sign up to see photos and videos from your friends.
          </h2>

          <form>
            <div class="mb-2">
              <div class="relative">
                <input
                  type="text"
                  class="form-input"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
            </div>

            <div class="mb-2">
              <div class="relative">
                <input
                  type="text"
                  class="form-input"
                  placeholder="Full Name"
                  aria-label="Full Name"
                />
              </div>
            </div>

            <div class="mb-3">
              <div class="relative">
                <input
                  type="password"
                  class="form-input"
                  placeholder="Password"
                  aria-label="Password"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
                >
                  Show
                </button>
              </div>
            </div>

            <div class="mb-3">
              <div class="relative">
                <input
                  type="password"
                  class="form-input"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
                >
                  Show
                </button>
              </div>
            </div>

            <div class="mb-2">
              <button type="submit" class="signup-button">
                Sign up
              </button>
            </div>
          </form>
        </div>

        <div class="bg-white p-6 border border-gray-300 text-center mb-4 rounded-md">
          <p class="text-sm">
            Have an account?
            <Link to={"/login"} class="text-blue-500 font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
