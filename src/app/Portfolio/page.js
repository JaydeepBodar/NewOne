import React from "react"
import Link from "next/link";
import Layout from "./layout";
const Portfolio = () => {
  const categorydata = [
    { name: "illustrations", image: "https://res.cloudinary.com/dxlicroam/image/upload/v1686041071/illustration_t9d6xr.png",category:'illustrations' },
    { name: "websites",image:'https://res.cloudinary.com/dxlicroam/image/upload/v1686041278/websites_u2vc8q.jpg',category:'websites' },
    { name: "applications" ,image:'https://res.cloudinary.com/dxlicroam/image/upload/v1686041295/apps_xtob2q.jpg',category:"applications"},
  ];
  return (
    <div>
      <h5 className="text-xl py-7">Choose our Gallery</h5>
      <div className="flex flex-wrap gap-7">
        {categorydata.map((val, index) => {
          const { name, image,category } = val;
          return (
            <Link key={index}
              className="relative block w-[300px] h-[300px] border-[5px] bg-cover max-sm:w-[100%]"
              style={{ backgroundImage: `url(${image})` }}
              href={`/Portfolio/${category}`} 
            >
              <span className="img text-xl font-semibold absolute bottom-2 right-4">
                {name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
