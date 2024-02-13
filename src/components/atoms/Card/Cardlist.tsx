import React from "react";
import Card from "./Card";

const CardList = ({ info, onSelectCard, selectCard}) => {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      {info.map((item, index) => (
        <Card onSelectCard={onSelectCard} selectCard={selectCard} name={item.name} age={item.age} key={index} src={item.src} />
      ))}
    </div>
  );
};

export default CardList;
