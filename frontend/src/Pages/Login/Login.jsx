import "./login.css";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/authcontext";
import toast from "react-hot-toast";
import LoadingSpinner from "../../Components/LoadingSpinner";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, userLogin, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const res = await userLogin(email, password);
      if (res.user.email) {
        toast.success("Login Success");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="login-container rounded-md">
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="PhotoBooth" className="h-[51px]" />
        </div>

        <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <div className="relative">
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="text"
                  className="form-input"
                  placeholder="Phone number, username, or email"
                  aria-label="Phone number, username, or email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-3">
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 charecters",
                    },
                  })}
                  type={showPassword ? "password" : "text"}
                  className="form-input"
                  placeholder="Password"
                  aria-label="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prevPass) => !prevPass)}
                  className="absolute cursor-pointer inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
                >
                  {showPassword ? "Show" : "Hide"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <button type="submit" className="login-button cursor-pointer">
                {isSubmitting ? "Logging in..." : "Log in"}
              </button>
            </div>

            <div className="or-separator">OR</div>

            <div className="mb-4">
              <button
                onClick={handleGoogle}
                className="login-button cursor-pointer"
              >
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
