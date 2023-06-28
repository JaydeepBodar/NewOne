"use client";
import React, { useState, useEffect, Children } from "react";
import Container from "../../component/Container";
import Image from "next/image";
import Contactimg from "../../../public/images/contact.png";
import Inputdata from "../../component/Inputdata";
import { toast } from "react-toastify";
import axios from "axios";
import Toastcontainer from "@/component/Toastcontainer";
const Contact = () => {
  const [Input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = Input;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const URL=process.env.API
    axios
      .post(`${URL}/api/Subscibe`, { ...Input })
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data);
        } else if (res.status === 200) {
          toast.warn(res.data);
        }
      })
      .catch((err) => toast.error(err.response.data))
      if(!message && !email && !name){
        setInput({name:"",email:"",message:""})
      }
  };
  return (
    <Container>
    <Toastcontainer/>
      <div className="text-center py-[30px]">
        <h2 className="text-3xl">Let's Keep In Touch...</h2>
      </div>
      <div className="grid grid-flow-row grid-cols-2 gap-x-12 items-center max-sm:grid-cols-1">
        <Image src={Contactimg} />
        <div className="py-[60px]">
          <form onSubmit={handleSubmit}>
            <Inputdata
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="Name..."
            />
            <Inputdata
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="Email..."
            />
            <textarea
              name="message"
              onChange={handleChange}
              value={message}
              placeholder="Enter Message here..."
              className="text-black px-3 py-2 bg-[#f2f2f2] mb-3 outline-none border-none rounded-md w-[100%]"
              rows="5"
            />
            <button className="w-[100px] max-md:w-[80px] max-md:text-base bg-[#4ade80] mt-2 py-2 text-black rounded-md font-semibold block text-center">
              Submit
            </button>       
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
