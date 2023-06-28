"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../../component/Container";
import "react-dropdown/style.css";
import Pagination from "@/component/Pagination";
const Blog = () => {
  const sortoption = [
    { label: "Oldest Blog", value: "oldest-accending", code: 2 },
    { label: "Newest Blog", value: "latest-accending", code: 1 },
    { label: "Alphabetically, A-Z", value: "alphabetic-accending", code: 3 },
    { label: "Alphabetically, Z-A", value: "alphabetic-decending", code: 4 },
  ];
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [blog, setblog] = useState([]);
  const [loading, setloading] = useState(true);
  const [sortOption, setSortOption] = useState("");
  const URL = process.env.API;
  useEffect(() => {
    axios
      .get(`${URL}/api/post`)
      .then((res) => setblog(res.data))
      .catch((e) => console.log("e", e))
      .finally(() => setloading(false));
  }, [loading, sortOption]);
  const sortdata = blog.sort((a, b) => {
    console.log("data", a);
    if (sortOption === "latest-accending") {
      return b.createdAt
        .split("/")
        .reverse()
        .join()
        .localeCompare(a.createdAt.split("/").reverse().join());
    } else if (sortOption === "oldest-accending") {
      return a.createdAt
        .split("/")
        .reverse()
        .join()
        .localeCompare(b.createdAt.split("/").reverse().join());
    } else if (sortOption === "alphabetic-accending") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "alphabetic-decending") {
      return b.title.localeCompare(a.title);
    }
  });
  return (
    <Container>
      <div className="max-sm:px-[25px] items-center flex justify-between max-sm:flex-col max-sm:gap-y-4">
        <Link
          className="block w-[100%] rounded-lg py-2 max-w-[200px] bg-transparent text-[#4ade80] border-[1px] text-center border-[#4ade80] max-sm:max-w-[100%]"
          href="/Blog/Addblog"
        >
          Add Your Own Blog
        </Link>
        <select
          className="drop-down"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          {sortoption.map((val, index) => {
            const { value, label, code } = val;
            return (
              <option value={value} key={index} className="option-val">
                {label}
              </option>
            );
          })}
        </select>
      </div>
      {loading && <h4 className={loading && "addclass"}>Loading...</h4>}
      {!loading && (
        <div>
          <div className="grid grid-flow-row grid-cols-3 gap-x-4 max-md:grid-cols-2 max-sm:px-[25px] max-sm:grid-cols-1">
            {sortdata.slice(indexOfFirstItem, indexOfLastItem).map((val, index) => {
              console.log("val", val);
              const { url, title, _id, user } = val;
              return (
                <Link href={`/Blog/${_id}`} key={index} className="py-4">
                  <div className="relative mb-3 overflow-hidden">
                    <Image
                      src={url}
                      style={{ height: "300px" }}
                      width={300}
                      height={300}
                      className="w-[100%] rounded-lg transform transition-all hover:scale-[1.2] overflow-hidden"
                      alt={title}
                    />
                    <h4 className="absolute w-[32px] h-[32px] leading-8 text-center rounded-full bg-white top-2 left-3 text-black">
                      {user}
                    </h4>
                  </div>
                  <h3 className="text-2xl font-semibold max-lg:text-xl">
                    {title}
                  </h3>
                </Link>
              );
            })}
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={sortdata.length}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </Container>
  );
};

export default Blog;
