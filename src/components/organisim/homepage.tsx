"use client";
import FormAdd from "@/components/molechule/formAdd";
import { CardList, FormUpdate, InputSearch, Modal } from "@/components";
import React, { useState } from "react";

const Display = () => {
  const [info, setInfo] = useState([
    {
      id: "1",
      name: "Reak",
      src: "/ghoul.jpg",
      age: "20",
    },
    {
      id: "2",
      name: "Leap",
      src: "/L.jpg",
      age: "18",
    },
    {
      id: "3",
      name: "Run",
      src: "/obito.png",
      age: "20",
    },
  ]);
  const [selectCard, setSelectCard] = useState();

  const [key, setKey] = useState(""); // Provide an initial value

  const editCard = info.filter((card) => {
    if (card.id === selectCard) {
      return card;
    }
  });

  return (
    <>
      <Modal selectCard={selectCard}>
        {selectCard ? (
          <FormUpdate editCard={editCard[0]} onSetInfo={setInfo} />
        ) : (
          <FormAdd setInfo={setInfo} />
        )}
      </Modal>

      <InputSearch onSetKey={setKey} />

      <CardList
        Key={key}
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
