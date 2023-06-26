import axios from "axios";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../../component/Container";
const URL=process.env.API
console.log("URlDATA",URL)
async function getData() {
  const data = await fetch(
    `${URL}/api/post`,
    { cache: "no-store" }
  );
  console.log("data",data)   
  if (!data) {
    console.log("error");
  }
  return data.json();
}
const Blog = async () => {
  const blog = await getData();
  return (
    <Container>
      <div className="grid grid-flow-row grid-cols-3 gap-x-4 max-md:grid-cols-2 max-sm:px-[25px] max-sm:grid-cols-1">
        {blog.map((val) => {
          const { url, title, id, user } = val;
          return (
            <Link href={`/Blog/${id}`} key={id} className="py-4">
              <div className="relative mb-3 overflow-hidden">
                <Image
                  src={url}
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
      </div>
    </Container>
  );
};

export default Blog;
