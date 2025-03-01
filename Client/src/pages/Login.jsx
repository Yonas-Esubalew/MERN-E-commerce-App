import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const validValue = Object.values(data).every((el) => el);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data", data);

    // if (data.password !== data.confirmPassword) {
    //   toast.error("password and confirm password must be same");
    //   return;
    // }

    try {
      const response = await Axios({
        ...SummaryApi.login,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        setData({
          email: "",
          password: "",
        });
        navigate("/");
      }
      console.log("response", response);
    } catch (error) {
      AxiosToastError(error);
    }
  };
  return (
    <section className="w-full container mx-auto px-1">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-4">
        <p>Welcome to Binkeyit</p>
        <form onSubmit={handleSubmit} className="grid gap-4 mt-6">
          <div className="grid gap-1">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-blue-50 focus-within:border-primary-200 mm-auto outline-none border rounded p-2"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="password">Password : </label>
            <div className="bg-blue-50 border rounded p-2 flex items-center focus-within:border-primary-200 mm-auto outline-none">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="w-full outline-none bg-blue-50"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <div>
                {showPassword ? (
                  <FaEye
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEyeSlash
                    className=" cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>
            <Link
              to={"/forgot-password"}
              className="hover:text-primary-100 block ml-auto"
            >
              Forgot Password?
            </Link>
          </div>
          {validValue ? (
            <button className="bg-green-800 text-white p-2 rounded font-semibold hover:bg-green-700 my-3 tracking-wide">
              Login
            </button>
          ) : (
            <button className="bg-gray-400 text-white p-2 rounded font-semibold my-3 tracking-wide">
              Login
            </button>
          )}
        </form>

        <p>
          Don't have an account?{" "}
          <Link
            className="hover:text-green-700 font-bold text-green-800 "
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
