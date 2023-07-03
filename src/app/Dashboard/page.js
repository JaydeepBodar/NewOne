"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Container from "@/component/Container";
const Dashboard = () => {
  const session = useSession();
  console.log("session", session);
  return (
    <Container>
      <div className="h-[76.5vh] flex flex-col justify-center items-center">
        {session.status === "authenticated" ? (
          <div className="w-[100%] text-center">
            <Link
              className="button block w-[100%] mx-[auto] rounded-lg py-2 max-w-[300px] bg-transparent border-[1px] text-center border-[#4ade80] max-sm:max-w-[100%]"
              href="/Blog/Addblog"
            >
              Add Your Blog
            </Link>
          </div>
        ) : (
          <div className="w-[100%] text-center">
          <Link
              className="button block w-[100%] mx-[auto] rounded-lg py-2 max-w-[400px] bg-transparent border-[1px] text-center border-[#4ade80] max-sm:max-w-[100%]"
              href="/Dashboard/login"
            >
              Click here to Login and add your Own Blog
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
