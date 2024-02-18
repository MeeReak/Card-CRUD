import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id?: string;
  src?: string;
  alt?: string;
  name?: string;
  age?: string;
  onSelectCard?: (id: string) => void;
  selectCard?: string;
  info: any;
  onSetInfo: any;
}

const Card: React.FC<CardProps> = ({
  id = "",
  src = "",
  alt = "",
  name = "",
  age = "",
  onSelectCard,
  selectCard,
  info,
  onSetInfo,
}) => {
  const deleteCard = () => {
    const newInfo = info.filter((card: { id: string }) => card.id !== id);
    console.log(selectCard);

    onSetInfo(newInfo);
  };
  return (
    <div
      onClick={() => {
        if (onSelectCard) {
          onSelectCard(id);
          if (selectCard === id) {
            onSelectCard("");
          }
        }
      }}
      className={
        selectCard === id
          ? "border border-yellow-400 bg-yellow-100 rounded-md shadow-md"
          : "border border-pink-400 bg-pink-100 rounded-md shadow-md"
      }
    >
      <div className="relative space-x-2 flex items-center  w-[400px] p-4 ">
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          className="rounded-full"
        />
        <button
          onClick={(e) => {
            deleteCard();
            e.stopPropagation();
          }}
          className="text-pink-500 hover:text-pink-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-0 right-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="space-y-1">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">Age: {age}</p>
          <button className="bg-pink-500 text-white hover:bg-pink-700 px-4 py-2 rounded-md  transition duration-300 ease-in-out">
            <Link href={`/${name}`}>Preview</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
