"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "../Container";
import Darkmode from "../Darkmode";
import { FiMenu } from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai"
export  const link = [
  { id: "1", title: "Home", url: "/" },
  { id: "2", title: "About", url: "/about" },
  { id: "3", title: "Blog", url: "/Blog" },
  { id: "4", title: "Contact", url: "/Contact" },
  { id: "5", title: "Dashboard", url: "/Dashboard" },
  { id: "6", title: "Portfolio", url: "/Portfolio" },
];
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <header className="data">
      <Container>
        <nav className="flex items-center justify-between py-4 max-md:bottom-0">
          <Link href="/">
            <h1 className="text-2xl font-semibold">NewOne</h1>
          </Link>
          <div className="ml-[auto] flex max-md:ml-0">
            <Darkmode />
          </div>
          <div
            className={`${
              toggle === true ? "menu transition-all duration-700" : "max-md:hidden"
            } transition-all duration-700`} onClick={()=>settoggle(false)}
          > 
            <ul className="md:pl-4 responsive flex gap-x-3 items-center max-md:flex-col max-md:items-start max-md:pl-3">
              {link.map((val) => {
                const { id, title, url } = val;
                return (
                  <li key={id} className="max-md:pb-2 max-md:w-[100%]">
                    {" "}
                    <Link href={url} className="hover:text-[#4ade80] max-md:flex max-md:justify-center">
                      {title}
                    </Link>
                  </li>
                );
              })}
              <li className="max-md:mx-[auto]">
                <button className="text-black bg-[#4ade80] px-3 py-1 leading-1 font-medium rounded-sm">
                  logout
                </button>
              </li>
            </ul>
          </div>
          <div
            className="max-md:block hidden ambegure"
            onClick={() => settoggle((prev) => !prev)}
          >
            {!toggle ? <FiMenu className="w-[25px] h-[25px]" /> : <AiOutlineClose className="w-[25px] h-[25px]"/>}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
