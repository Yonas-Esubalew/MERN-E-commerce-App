import React, { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
  });
  const navigate = useNavigate();
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

    try {
      const response = await Axios({
        ...SummaryApi.forgotPassword,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/verify-forgot-password-otp", { state: data });
        setData({
          email: "",
        });
        
      }
      console.log("response", response);
    } catch (error) {
      AxiosToastError(error);
    }
  };
  return (
    <section className="w-full container mx-auto px-1">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-4">
        <p>Forgot password</p>
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
          {validValue ? (
            <button className="bg-green-800 text-white p-2 rounded font-semibold hover:bg-green-700 my-3 tracking-wide">
              Send OTP
            </button>
          ) : (
            <button className="bg-gray-400 text-white p-2 rounded font-semibold my-3 tracking-wide">
              Send OTP
            </button>
          )}
        </form>

        <p>
            Already have an account? <Link className="hover:text-green-700 font-bold text-green-800 " to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
