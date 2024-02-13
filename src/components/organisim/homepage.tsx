"use client";
import FormAdd from "@/components/molechule/formAdd";
import { CardList, Modal } from "@/components";
import React, { useState } from "react";

const Display = () => {
  const [info, setInfo] = useState([
    {
      name: "Reak",
      src: "/ghoul.jpg",
      age: "20",
    },
    {
      name: "Leap",
      src: "/L.jpg",
      age: "18",
    },
    {
      name: "Run",
      src: "/obito.png",
      age: "20",
    },
  ]);
  const [selectCard, setSelectCard] = useState();

  return (
    <>
      <Modal selectCard={selectCard}>
        <FormAdd setInfo={setInfo} />
      </Modal>
      <CardList
        info={info}
        selectCard={selectCard}
        onSelectCard={setSelectCard}
      />

      {/* <div className="flex flex-col">
        {value && <Modal setInfo={setInfo} />}
        <button
          className="absolute top-0 w-[100px] h-[100px]  bg-pink-500 rounded-full flex justify-center items-center"
          onClick={toggleForm}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white hover:text-pink-700 focus:outline-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div> */}
    </>
  );
};

export default Display;
