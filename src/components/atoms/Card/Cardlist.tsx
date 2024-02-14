import React from "react";
import Card from "./Card";

const CardList = ({ info, onSelectCard, selectCard, Key }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      {Key
        ? info
            .filter((item) => item.name.toLowerCase().includes(Key))
            .map((item, index) => (
              <Card
                id={item.id}
                onSelectCard={onSelectCard}
                selectCard={selectCard}
                name={item.name}
                age={item.age}
                key={index}
                src={item.src}
              />
            ))
        : info.map((item, index) => (
            <Card
            id={item.id}
              onSelectCard={onSelectCard}
              selectCard={selectCard}
              name={item.name}
              age={item.age}
              key={index}
              src={item.src}
            />
          ))}
    </div>
  );
};

export default CardList;
