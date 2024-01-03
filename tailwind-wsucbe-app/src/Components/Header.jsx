import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Header = () => {
  const [tooggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[15px] items-center  flex justify-between mx-auto">
        <div className="text-3xl font-bold">Samad Teach</div>
        {tooggle ? (
          <MdOutlineMenu
            onClick={() => setToggle(!tooggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <IoIosCloseCircleOutline
            onClick={() => setToggle(!tooggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* 
        responsive */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[92px]
        ${tooggle ? `left-[0]` : `left-[-100%]`}`}
        >
          <li className="p-3">Home</li>
          <li className="p-3">Company</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
