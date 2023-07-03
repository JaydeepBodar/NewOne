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
  const route = useRouter();
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
    axios
      .post(`${Url}/api/auth/Register`,JSON.stringify({...Input}))
      .then((res) => {
        if (res.status === 202) {
          toast.error(res.data);
        } else if (res.status === 201) {
          toast.warn(res.data);
        } else {
          toast.success(res.data);
          setInput({ name: "", email: "", password: "" });
          route.push("/Dashboard/login");
        }
      })
      .catch((e) => console.log("error", e));
  };
  return (
    <Container>
      <Toastcontainer />
      <div className="h-[78.5vh] flex flex-col justify-center items-center">
        <div className="w-[500px] max-sm:max-w-[100%] mx-[auto] formdata max-sm:px-10 max-sm:py-12 rounded-md px-16 py-14">
        <h4 className="text-center font-semibold text-3xl tracking-normal mb-4">
          Sign up...
        </h4>
        <form onSubmit={handleSubmit}>
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
        <Link href="/Dashboard/login" className="pt-2 flex justify-center hover:text-blue-600 transition-all duration-500">
          Log in with an existing account
        </Link>
        </div>
      </div>
    </Container>
  );
};

export default page;
