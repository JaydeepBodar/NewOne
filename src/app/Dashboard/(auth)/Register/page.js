"use client";
import Inputdata from "@/component/Inputdata";
import Container from "@/component/Container";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import Toastcontainer from "@/component/Toastcontainer";
import { useRouter } from "next/navigation";

const page = () => {
  const route=useRouter()
  const [Input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = Input;
  const InputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const Url = process.env.API;
    axios.post(`${Url}/api/auth/Register`, { ...Input }).then((res) => {
      if (res.status === 202) {
        toast.error(res.data);
      }else if(res.status === 201){
        toast.warn(res.data)
      }else{
        toast.success(res.data)
        route.push('/')
      }
    }).catch((e)=>console.log("error",e))
    setInput({name:"",email:"",password:""})
  };
  return (
    <Container>
    <Toastcontainer/>
      <div className="h-[78.5vh] flex flex-col justify-center items-center">
        <form className="w-[500px] max-sm:max-w-[100%   ]" onSubmit={handleSubmit}>
          <Inputdata
            type="text"
            value={name}
            name="name"
            onChange={InputChange}
            placeholder="fullname..."
          />
          <Inputdata
            type="email"
            value={email}
            name="email"
            onChange={InputChange}
            placeholder="email..."
          />
          <Inputdata
            type="password"
            value={password}
            name="password"
            onChange={InputChange}
            placeholder="password..."
          />
          <button className="w-[100%] max-sm:py-[5px] py-[10px] bg-[#4ade80] text-black font-semibold tracking-wide rounded-md">
            Register
          </button>
        </form>
        <Link href="/Dashboard/login" className="pt-2">
          Log in with an existing account
        </Link>
      </div>
    </Container>
  );
};

export default page;
