"use client";

import {
  CardList,
  FormUpdate,
  InputSearch,
  Modal,
  FormAdd,
} from "@/components";
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
  const [selectCard, setSelectCard] = useState("");

  const [key, setKey] = useState(""); 

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
        onSetInfo={setInfo}
        Key={key}
        info={info}
        selectCard={selectCard}
        onSelectCard={setSelectCard}
      />
    </>
  );
};

export default Display;
