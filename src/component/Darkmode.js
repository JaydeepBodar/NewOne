"use client";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useGlobalcontext } from "../../Context/Themecontext";
const Darkmode = () => {
  const { toggle, mode } = useGlobalcontext();  
  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 border-[1px] px-2 py-1.5 rounded-2xl max-md:gap-1 max-md:px-[5px] max-md:py-[2.9px]"
      >
        <BsMoon className="max-md:w-[15px]" />
        <FiSun className="max-md:w-[15px]" />
      </div>
      <div
        onClick={toggle}
        className="bg-[#4ade80] w-[24px] h-[24px] max-md:w-[17px] max-md:h-[17px] rounded-full absolute top-[2.5px]"
        style={mode === "light" ? { left: "4px" } : { right: "4px" }}
      />
    </div>
  );
};

export default Darkmode;
