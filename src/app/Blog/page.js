"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../../component/Container";
const Blog = () => {
  const [blog, setblog] = useState([]);
  const [loading, setloading] = useState(true);
  const URL = process.env.API;
  useEffect(() => {
    axios
      .get(`${URL}/api/post`)
      .then((res) => setblog(res.data))
      .catch((e) => console.log("e", e)).finally(()=>setloading(false))
  }, [loading]);
  return (
    <Container>
      <div className='max-sm:px-[25px]'>
        <Link className="block w-[100%] rounded-lg py-2 max-w-[200px] bg-transparent text-[#4ade80] border-[1px] text-center border-[#4ade80] max-sm:max-w-[100%]" href="/Blog/Addblog">Add Your Own Blog</Link>
      </div>
      {loading && <h4 className={loading && 'addclass'}>Loading...</h4>}
      {!loading &&       <div className="grid grid-flow-row grid-cols-3 gap-x-4 max-md:grid-cols-2 max-sm:px-[25px] max-sm:grid-cols-1">
        {blog.map((val, index) => {
          console.log("val",val)
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
              <h3 className="text-2xl font-semibold max-lg:text-xl">{title}</h3>
            </Link>
          );
        })}
      </div>}
    </Container>
  );
};

export default Blog;
