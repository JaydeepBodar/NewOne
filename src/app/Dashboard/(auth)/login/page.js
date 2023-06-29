"use client";
import React,{useState} from "react";
import { signIn, useSession } from "next-auth/react";
import Toastcontainer from "@/component/Toastcontainer";
import Inputdata from "@/component/Inputdata";
import Container from "@/component/Container";
const page = () => {
  const session=useSession()
  console.log("session",session)
  const [Input, setInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = Input;
  const InputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    try{
      signIn('credentials',{...Input,callbackUrl:'/'})
    }catch(e){
      console.log("e",e)
    }
  }
  return (
    <Container>
      <Toastcontainer />
      <div className="h-[78.5vh] flex flex-col justify-center items-center">
        <form
          className="w-[500px] max-sm:max-w-[100%   ]"
          onSubmit={handleSubmit}
        >
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
            Login
          </button>
        </form>
        <button
          onClick={() => {
            signIn("google");
          }}
        >
          Log in with google
        </button>
      </div>
    </Container>
  );
};

export default page;
