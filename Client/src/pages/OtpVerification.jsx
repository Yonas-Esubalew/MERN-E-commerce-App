import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useLocation, useNavigate } from "react-router-dom";
const OtpVerification = () => {
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/forgot-password");
    }
  }, []);
  const validValue = data.every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data", data);
    try {
      const response = await Axios({
        ...SummaryApi.verifyForgotPasswordOtp,
        data: {
          otp: data.join(""),
          email: location?.state?.email,
        },
      });
      if (response.data.error) {
        toast.error(response.data.message);
      }
      if (response.data.success) {
        toast.success(response.data.message);
        setData(["", "", "", "", "", ""]);
        navigate("/reset-password", {
          state: {
            data: response.data,
            email: location?.state?.email
          },
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
        <p>Enter Your OTP</p>
        <form onSubmit={handleSubmit} className="grid gap-4 mt-6">
          <div className="grid gap-1">
            <label htmlFor="email">Enter OTP : </label>
            <div className="flex items-center gap-2 justify-between mt-3">
              {data.map((element, index) => (
                <input
                  key={"otp" + index}
                  type="text"
                  id="otp"
                  ref={(ref) => {
                    inputRef.current[index] = ref;
                    return ref;
                  }}
                  value={data[index]}
                  onChange={(e) => {
                    const value = e.target.value;
                    console.log("value", value);
                    const newData = [...data];
                    newData[index] = value;
                    setData(newData);

                    if (value) {
                      inputRef.current[index + 1]?.focus();
                    }
                  }}
                  maxLength={1}
                  className="bg-blue-50 focus-within:border-primary-200 mm-auto outline-none border rounded p-2  w-full max-w-16 flex-row gap-4 px-4 text-center font-semibold"
                />
              ))}
            </div>
          </div>
          {validValue ? (
            <button className="bg-green-800 text-white p-2 rounded font-semibold hover:bg-green-700 my-3 tracking-wide">
              Verify OTP
            </button>
          ) : (
            <button className="bg-gray-400 text-white p-2 rounded font-semibold my-3 tracking-wide">
              Verify OTP
            </button>
          )}
        </form>
        <p>
          Already have an account?{" "}
          <Link
            className="hover:text-green-700 font-bold text-green-800 "
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default OtpVerification;
