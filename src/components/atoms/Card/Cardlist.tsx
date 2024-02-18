import React from "react";
import Card from "./Card";

interface CardList {
  info: any;
  onSelectCard: (id: string) => void;
  selectCard: string;
  Key: string;
  onSetInfo: any;
}

interface Item {
  id: string;
  name: string;
  age: string;
  src: string;
}

const CardList = ({ info, onSelectCard, selectCard, Key, onSetInfo }: CardList) => {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      {Key
        ? info
            .filter((item: Item) =>
              item.name.toLowerCase().includes(Key.toLowerCase())
            )
            .map((item: Item, index: React.Key) => (
              <Card
                info={info}
                onSetInfo={onSetInfo}
                id={item.id}
                onSelectCard={onSelectCard}
                selectCard={selectCard}
                name={item.name}
                age={item.age}
                key={index}
                src={item.src}
              />
            ))
        : info.map((item: Item, index: React.Key) => (
            <Card
              info={info}
              onSetInfo={onSetInfo}
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
