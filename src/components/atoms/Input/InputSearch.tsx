"use client";

import React from "react";

interface InputSearchProps {
  onSetKey?: (key: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ onSetKey }) => {

  //this function get the value of input then sent it by onSetKey
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetKey && onSetKey(e.target.value);
  };

  return (
    <div className="w-[325px] fixed">
      <input
        className="text-black border outline-none  border-[#828282] h-[50px]  w-full pl-[20px] pr-[10px] py-[15px] rounded-full"
        type="text"
        onChange={handleChange}
        placeholder="Search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="text-[#828282] w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export { InputSearch };
