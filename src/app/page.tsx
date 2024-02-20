"use client";
import React, { useState } from "react";
import {
  CardList,
  FormUpdate,
  InputSearch,
  Modal,
  FormAdd,
} from "@/components";

export default function Home() {
  //this state store info like name, age and src
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

  //this state store the id of the selected card
  const [selectCard, setSelectCard] = useState("");

  //this state store the key of the search input
  const [key, setKey] = useState("");

  //this function filter the card that the user select
  const editCard = info.filter((card) => {
    if (card.id === selectCard) {
      return card;
    }
  });

  return (
    <>
      <>
        <Modal selectCard={selectCard}>
          {/* if the user select a card the form will be updated with the card info and if user unselect a card the form will add */}
          {selectCard ? (
            <FormUpdate editCard={editCard[0]} onSetInfo={setInfo} />
          ) : (
            <FormAdd setInfo={setInfo} />
          )}
        </Modal>

        <InputSearch onSetKey={setKey} />

        {/* this component display the card list */}
        <CardList
          onSetInfo={setInfo}
          Key={key}
          info={info}
          selectCard={selectCard}
          onSelectCard={setSelectCard}
        />
      </>
    </>
  );
}
