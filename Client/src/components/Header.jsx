import React, { useReducer, useState } from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import useMobile from "../hooks/useMobile";
import { BsCart4 } from "react-icons/bs";
const Header = () => {
  const isMobile = useMobile(false);
  const location = useLocation();
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login");
  };
  const user = useReducer
  console.log("location", location);
  console.log("isMobile", isMobile);
  const isSearchPage = location?.pathname === "/search";
  return (
    <header className="h-24 lg:h-20 sticky top-0  lg:shadow-md flex flex-col justify-center gap-1">
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto flex items-center px-2 justify-between">
          {/* logo */}
          <div className="h-full">
            <Link to={"/"} className="h-full flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                height={60}
                width={170}
                className="hidden lg:block"
              />
              <img
                src={logo}
                alt="logo"
                height={60}
                width={120}
                className="lg:hidden"
              />
            </Link>
          </div>
          {/* search */}
          <div className="hidden lg:block">
            <Search />
          </div>
          {/* Login and my cart */}
          <div className="">
            {/* for mobile */}
            <button className="lg:hidden text-neutral-600">
              <FaUser size={25} />
            </button>
            {/* for desktop */}
            <div className="hidden lg:flex gap-10 items-center">
              <div cursor="pointer" onClick={redirectToLogin} className="font-semibold">
                Login
              </div>
              <button className="flex items-center gap-4 bg-green-800 hover:bg-green-700 px-3 py-3 rounded text-white">
                {/* add to cart */}
                <div className="animate-bounce">
                  <BsCart4 size={26} />
                </div>
                {/* 1 item */}
                <div className="font-semibold">
                  <p>My Cart</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-2 lg:hidden">
        <Search />
      </div>
    </header>
  );
};

export default Header;
