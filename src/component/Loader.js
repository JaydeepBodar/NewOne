import React from "react";

const Loader = () => {
  const word = [
    { w: "L" },
    { w: "o" },
    { w: "a" },
    { w: "d" },
    { w: "i" },
    { w: "n" },
    { w: "g" },
    { w: "." },
    { w: "." },
    { w: "." },
  ];
  return (
    <div className="waviy">
      {word.map((val, index) => {
        return <span key={index}>{val.w}</span>;
      })}
    </div>
  );
};

export default Loader;
