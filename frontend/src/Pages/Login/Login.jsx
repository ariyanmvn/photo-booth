import "./login.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="login-container rounded-md">
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="PhotoBooth" className="h-[51px]" />
        </div>

        <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
          <form>
            <div className="mb-3">
              <div className="relative">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Phone number, username, or email"
                  aria-label="Phone number, username, or email"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="relative">
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  aria-label="Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
                >
                  Show
                </button>
              </div>
            </div>

            <div className="mb-4">
              <button type="submit" className="login-button">
                Log in
              </button>
            </div>

            <div className="or-separator">OR</div>

            <div className="mb-4">
              <button type="submit" className="login-button">
                Log in with Google
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white p-6 border border-gray-300 text-center ">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
