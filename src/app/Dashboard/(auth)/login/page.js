"use client";
import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Toastcontainer from "@/component/Toastcontainer";
import Inputdata from "@/component/Inputdata";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Container from "@/component/Container";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
const login = ({ csrfToken }) => {
  const session = useSession();
  const router = useRouter();
  console.log("session", session);
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);
  const [Input, setInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = Input;
  const InputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };
  if (session.status === "authenticated") {
    router.push("/Dashboard")
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const res=await signIn("credentials", {redirect:false,...Input });
        console.log("res",res)
        if(res.error){
          toast.error(res.error)
        }else{
          return res
        }
    }catch(err){
      console.log("datafirst")
      console.log("err",err)
    }

  };
  return (
    <Container>
      <Toastcontainer />
      <div className="h-[78.5vh] md:mb-[4px] flex flex-col justify-center items-center">
        <div className="formdata w-[500px] max-sm:max-w-[100%] mx-[auto] formdata max-sm:px-10 max-sm:py-12 rounded-md px-16 py-14">
          <h4 className="text-center font-semibold text-3xl mb-4 tracking-normal">
            Log in...
          </h4>
          <form onSubmit={handleSubmit}>
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
            <button className="w-[100%] max-sm:py-[5px] py-[10px] bg-[#4ade80] mb-3 text-black font-semibold tracking-wide rounded-md">
              Login
            </button>
            {error && error}
          </form>
          <button
            className="w-[100%] flex items-center border-[1px] border-blue-500 rounded-md"
            onClick={() => {
              signIn("google");
            }}
          >
            <p className="shrink w-[20%] bg-white max-sm:py-[10px] py-[14px] rounded-bl-md rounded-tl-md ">
              <FcGoogle className="text-lg md:text-1xl mx-[auto]" />
            </p>{" "}
            <p className="font-semibold tracking-wide max-sm:py-[5px] py-[10px] shrink w-[80%] bg-blue-500">
              Log in with google
            </p>
          </button>
          <Link
            href="/Dashboard/Register"
            className="pt-2 flex justify-center hover:text-blue-600 transition-all duration-500"
          >
            Create New Account...
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default login;
