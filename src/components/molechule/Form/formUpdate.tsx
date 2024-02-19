"use client";
import React, { useState } from "react";

interface FormAddProps {
  onSetInfo: (value: any) => void;
  editCard: any;
}

const FormUpdate: React.FC<FormAddProps> = ({ onSetInfo, editCard }) => {
  const [value, setValue] = useState({
    name: editCard.name,
    age: editCard.age,
    src: editCard.src,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  }

  //
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile) {
      const imgUrl = URL.createObjectURL(selectedFile);
      setValue((preValue) => ({ ...preValue, src: imgUrl }));
    }
  }

  //this function update the card info
  function handUpdate(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    
    onSetInfo((preList: any) => {
      const updatedList = preList.map((item: any) => {
        if (item.id === editCard.id) {
          return {
            ...item,
            ...value,
          };
        }
        return item;
      });
      return updatedList;
    });
  }

  return (
    <div className="absolute border  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8 rounded-lg shadow-lg">
      <div className="w-64">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={value.name}
            className="w-full mt-1 p-2 border-b-2 text-black border-pink-300 focus:outline-none focus:border-pink-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-semibold text-gray-700"
          >
            Age
          </label>
          <input
            type="text"
            id="age"
            value={value.age}
            className="w-full mt-1 p-2 border-b-2 border-pink-300 text-black focus:outline-none focus:border-pink-500"
            name="age"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="src"
            className="block text-sm font-semibold text-gray-700"
          >
            File
          </label>
          <input
            type="file"
            id="src"
            className="w-full mt-1 p-2 border-b-2 border-pink-300 focus:outline-none focus:border-pink-500"
            name="src"
            onChange={handleFileChange}
          />
        </div>
        {/* <img src={value.src} alt="" /> */}

        <button
          className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none"
          onClick={handUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default FormUpdate;
