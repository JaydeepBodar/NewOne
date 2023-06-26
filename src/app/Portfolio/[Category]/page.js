import React from "react";
import { items } from "./data";
import Image from "next/image";
function getData(category) {
  const data = items[category];
  if (data) {
    return data;
  }
}
export async function generateMetadata({params}){
    return{
      title:params.Category
    } 
}
const Category = ({ params }) => {
  const data = getData(params.Category);
  return (
    <React.Fragment>
      <h2 className="text-3xl max-sm:text-xl font-semibold py-4">{params.Category}</h2>
      {data.map((val) => {
        const { title, desc, image } = val;
        return (
          <div className="flex gap-x-10 mb-[30px] max-md:flex-wrap max-md:px-[25px]">
            <Image src={image} width={300} height={300} className='max-md:w-[100%]' />
            <div className="max-md:mt-4">
              <h3 className="text-2xl max-sm:text-base font-semibold">{title}</h3>
              <p className="max-sm:text-sm">{desc}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Category;
