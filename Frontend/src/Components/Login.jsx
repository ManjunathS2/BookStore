import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userinfo)
      .then((response) => {
        console.log("User logged in successfully:", response.data.user);
        if (response.data) {
          alert("Login Successful!");
        }
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Close modal
        document.getElementById("my_modal_3").close();
        // Optional: Reload page to update Navbar state immediately
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          alert("Error: " + error.response.data.message);
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div>
      {/* Changed ID to my_modal_3 to match the Navbar call in previous steps */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-md p-6 md:p-8 dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button - Now just closes modal without redirecting, unless you specifically need redirect */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl text-center mb-6">Login</h3>

            <div className="flex flex-col gap-4">
              {/* Email Field */}
              <div className="space-y-2">
                <span className="font-medium">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md outline-none focus:border-pink-500 transition-colors dark:bg-slate-800 dark:border-slate-700"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500 block mt-1">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <span className="font-medium">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md outline-none focus:border-pink-500 transition-colors dark:bg-slate-800 dark:border-slate-700"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500 block mt-1">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* Button Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
              <button className="w-full sm:w-auto bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-200">
                Login
              </button>

              <p className="text-sm">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer hover:text-blue-700"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
