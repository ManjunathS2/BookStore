import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Login from "./Login"; 

function Signup() {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      // .post("http://localhost:4001/user/register", userinfo)\
      .post("https://bookstore-2-sulb.onrender.com/user/register", userinfo)

      .then((response) => {
        console.log("User registered successfully:", response.data);
        if (response.data) {
          alert("Signup Successful");
          navigate("/"); // Requires const navigate = useNavigate();
        }
        // localStorage.setItem("Users", JSON.stringify(response.data));
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert("User already exists. Please use a different email.");
        }
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen dark:bg-slate-900">
       
        <div className="w-full max-w-md p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg border dark:border-slate-700 relative">
   
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white"
          >
            ✕
          </Link>

          <h3 className="font-bold text-2xl mb-6 text-center dark:text-white">
            Signup
          </h3>

  
          <form onSubmit={handleSubmit(onSubmit)}>
      
            <div className="mb-4 space-y-2">
              <label className="dark:text-white font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md outline-none focus:border-pink-500 transition-colors dark:bg-slate-900 dark:border-slate-600 dark:text-white"
         
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

         
            <div className="mb-4 space-y-2">
              <label className="dark:text-white font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 border rounded-md outline-none focus:border-pink-500 transition-colors dark:bg-slate-900 dark:border-slate-600 dark:text-white"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

         
            <div className="mb-6 space-y-2">
              <label className="dark:text-white font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-3 py-2 border rounded-md outline-none focus:border-pink-500 transition-colors dark:bg-slate-900 dark:border-slate-600 dark:text-white"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm dark:text-gray-300">
                Have an account?{" "}
                
                <button
                  className="underline text-blue-500 cursor-pointer hover:text-blue-700"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
            
                <Login />
              </p>

              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200"
              >
                Sign Up
              </button>
            </div>
          </form>
    
        </div>
      </div>
    </>
  );
}

export default Signup;
