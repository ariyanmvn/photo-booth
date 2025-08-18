import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import Logo from "../../assets/logo-2.svg";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/authcontext";

export default function Register() {
  const { createProfile, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { fullName, email, password, cpassword } = data;

    try {
      if (password !== cpassword) {
        return toast.error("Password didn't match!");
      }

      const res = await createProfile(email, password);

      if (res?.user) {
        await updateUserProfile({
          displayName: fullName,
          photoURL: "",
        });
      }
      toast.success("Successfully registered");
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-8 sm:px-6 lg:px-8">
      <div className="signup-container">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="PhotoBooth" className="h-[51px]" />
        </div>

        <div className="bg-white p-6 border border-gray-300 mb-3">
          <h2 className="text-center font-semibold text-gray-500 text-lg mb-4">
            Sign up to see photos and videos from your friends.
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <div className="relative">
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="text"
                  className="form-input"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-2">
              <div className="relative">
                <input
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  type="text"
                  className="form-input"
                  placeholder="Full Name"
                  aria-label="Full Name"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be atleast 6 charecters",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  placeholder="Password"
                  aria-label="Password"
                />
                <button
                  onClick={() => setShowPassword((prevPass) => !prevPass)}
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <div className="relative">
                <input
                  {...register("cpassword", {
                    required: "Confirm Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be atleast 6 charecters",
                    },
                  })}
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-input"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((prevPass) => !prevPass)
                  }
                  className="absolute cursor-pointer inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cpassword.message}
                </p>
              )}
            </div>

            <div className="mb-2">
              <button type="submit" className="signup-button cursor-pointer">
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white p-6 border border-gray-300 text-center mb-4 rounded-md">
          <p className="text-sm">
            Have an account?
            <Link to={"/login"} className="text-blue-500 font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
