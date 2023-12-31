"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
const Singleblog = ({ data }) => {
  const { title, url, description, user } = data;
  return (
    <Container>
      <div className=" grid grid-flow-row items-center grid-cols-2 gap-x-9 mt-10 h-[72.1vh] max-sm:h-[auto] max-sm:grid-cols-1">
        <div className="relative">
          <Image
            width={500}
            height={500}
            className="h-[400px] object-fill rounded-lg max-sm:text-center max-sm:w-[100%]"
            src={url}
            // ref={ref}
          />
          <h4 className="absolute w-[32px] h-[32px] leading-8 text-center rounded-full bg-white top-2 left-3 text-black">
            {user}
          </h4>
        </div>
        <div className="content max-sm:mt-3">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <h4 className="py-4 max-">{description}</h4>
          <Link
            className="w-[100px] bg-[#4ade80] max-md:w-[80px] max-md:text-base max-md:mt-2 mt-6 py-2 text-black rounded-md font-semibold block text-center"
            href="/Blog"
          >
            back
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Singleblog;
