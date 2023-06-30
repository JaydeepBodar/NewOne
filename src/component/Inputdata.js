import React from "react";

const Inputdata = ({value,onChange,placeholder,name,type,pattern}) => {
  return (
    <div className="flex flex-col">
      <input
        className="text-black px-3 py-2 bg-[#f2f2f2] mb-3 outline-none border-none rounded-lg"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        type={type}
        pattern={pattern}
      />
    </div>
  );
};

export default Inputdata;
