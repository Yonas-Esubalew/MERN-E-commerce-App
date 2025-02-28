import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const validValue = Object.values(data).every((el) => el);
  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <section className="w-full container mx-auto px-1">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-4">
        <p>Welcome to Binkeyit</p>
        <form onSubmit={handleSubmit} className="grid gap-4 mt-6">
          <div className="grid gap-1">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              autoFocus
              className="bg-blue-50 border rounded p-2 focus-within:border-primary-200 mm-auto outline-none"
              value={data.name}
              onchange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-blue-50 focus-within:border-primary-200 mm-auto outline-none border rounded p-2"
              value={data.email}
              onchange={handleChange}
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
                onchange={handleChange}
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
          </div>
          <div className="grid gap-1">
            <label htmlFor="confirmPassword">Password : </label>
            <div className="bg-blue-50 border rounded p-2 flex items-center focus-within:border-primary-200 mm-auto outline-none">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                className="w-full outline-none bg-blue-50"
                value={data.confirmPassword}
                onchange={handleChange}
                placeholder="Enter your confirm password"
              />
              <div>
                {showConfirmPassword ? (
                  <FaEye
                    className="cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <FaEyeSlash
                    className=" cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </div>
            </div>
          </div>
          {validValue ? (
            <button className="bg-green-800 text-white p-2 rounded font-semibold hover:bg-green-700 my-3 tracking-wide">
              Register
            </button>
          ) : (
            <button className="bg-gray-400 text-white p-2 rounded font-semibold my-3 tracking-wide">
              Register
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Register;
