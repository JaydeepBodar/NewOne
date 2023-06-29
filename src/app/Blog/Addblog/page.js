"use client";
import React, { useState } from "react";
import Container from "@/component/Container";
import Image from "next/image";
import Inputdata from "@/component/Inputdata";
import Blogimg from "../../../../public/images/pexels-pixabay-262508 .jpg";
import axios from "axios";
import { toast } from "react-toastify";
import Toastcontainer from "@/component/Toastcontainer";
import { useRouter } from "next/navigation";
const page = () => {
  const route=useRouter()
  const [url, setPic] = useState("");
  const [Input, setInput] = useState({
    title: "",
    user: "",
    description: "",
  });
  const { title, user, description } = Input;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };
  const uploadImg = (pics) => {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "htepld3m");
    data.append("cloud_name", "dxlicroam");
    fetch("https://api.cloudinary.com/v1_1/dxlicroam/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url || !title || !description || !user) {
      toast.error("All field are required");
    } else {
      const Urldata = process.env.API;
      const data = { ...Input, url };
      console.log("data", JSON.stringify(data));
      axios
        .post(`${Urldata}/api/post`, data)
        .then((res) => toast.success(res.data),route.push('/Blog'))
        .catch((e) => console.log("e", e));
      }
      setInput({title:"",description:"",user:""})
      setPic("")
    };
  return (
    <Container>
    <Toastcontainer/>
      <div className="grid grid-flow-row grid-cols-2 items-center py-[46.5px] gap-x-8 max-sm:px-5 max-sm:grid-cols-1">
        <div className="max-sm:mb-6">
          <Image src={Blogimg} />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <Inputdata
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
              placeholder="Blog title..."
            />
            <Inputdata
              type="text"
              name="user"
              pattern="[0-9.]+"
              onChange={handleChange}
              value={user}
              placeholder="userID..."
            />
            <Inputdata
              type="file"
              name="pics"
              onChange={(e) => uploadImg(e.target.files[0])}
            />
            <textarea
              name="description"
              onChange={handleChange}
              value={description}
              placeholder="Blog Discription..."
              className="text-black px-3 py-2 bg-[#f2f2f2] mb-3 outline-none border-none rounded-md w-[100%]"
              rows="5"
            />
            <button className="w-[100px] max-md:w-[80px] max-md:text-base bg-[#4ade80] mt-2 py-2 text-black rounded-md font-semibold block text-center">
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default page;
