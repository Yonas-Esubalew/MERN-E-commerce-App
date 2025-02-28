import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowLeft } from "react-icons/fa6";
import useMobile from "../hooks/useMobile";
const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setIsSearchPage] = useState(false);
  const [isMobile] = useMobile();
  console.log("location", location);

  useEffect(() => {
    const isSearchPage = location.pathname === "/search";
    setIsSearchPage(isSearchPage);
  }, [location]);
  console.log("isSearch Page ", isSearchPage);
  const redirectToSearchPage = () => {
    navigate("/search");
  };
  return (
    <div className="w-full min-w-[300px] lg:min-w-[420px] h-10 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 focus-within:border-primary-200 group">
      {isMobile && isSearchPage ? (
        <Link to={"/"} className="flex justify-center items-center h-full p-2 m-1 text-neutral-500 group-focus-within:text-primary-200 bg-white rounded-full">
          <FaArrowLeft size={20} />
        </Link>
      ) : (
        <button className="flex justify-center items-center h-full p-3 text-neutral-500 group-focus-within:text-primary-200">
          <IoSearchSharp size={20} />
        </button>
      )}
      <div className="w-full h-full flex items-center">
        {!isSearchPage ? (
          //not in Search page
          <div onClick={redirectToSearchPage}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Search "milk"',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Search "bread"',
                1000,
                'Search "sugar"',
                1000,
                'Search "panner"',
                1000,
                'Search "chocolate"',
                1000,
                'Search "curd"',
                1000,
                'Search "rice"',
                1000,
                'Search "egg"',
                1000,
                'Search "chips"',
                1000,
                'Search "tea"',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        ) : (
          // in Search page
          <div className="w-full h-full">
            <input
              className="w-full h-full p-2 focus:outline-none bg-transparent"
              type="text"
              autoFocus
              placeholder="Search for atta dal and more."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
