"use client";
import { createContext, useState,useContext } from "react";

export const Themecontext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setmode] = useState("dark");
  const toggle = () => {
    setmode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <Themecontext.Provider value={{ toggle, mode }}>
      <div className={`${mode}`}>{children}</div>
    </Themecontext.Provider>
  );
};
export const useGlobalcontext=()=>{
    return useContext(Themecontext);
}