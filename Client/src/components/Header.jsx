import React from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
const Header = () => {
  return (
    <header className="h-20 sticky top-0  shadow-md">
      <div className="container mx-auto flex items-center h-full px-2 justify-between">
        {/* logo */}
        <div className="h-full">
          <div className="h-full flex items-center justify-center">
            <img src={logo} alt="logo" height={60} width={170}  className="hidden lg:block"/>
            <img src={logo} alt="logo" height={60} width={120}  className=" lg:hidden"/>
          </div>
        </div>
        {/* search */}
        <div>
          <Search />
        </div>
        {/* Login and my cart */}
        <div>
          Login and My Cart
        </div>
      </div>
    </header>
  );
};

export default Header;
