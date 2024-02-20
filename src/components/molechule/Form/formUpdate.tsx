"use client";
import schema from "@/components/validetion/schema";
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
    validate(e.target.name, e.target.value);
  }

  const [error, setError] = useState({
    name: "",
    age: "",
    src: "",
  });

  console.log(error, "error");

  const validate = async (name: string, value: string) => {
    try {
      await schema.validateAt(name, { [name]: value });
      setError((pre) => ({ ...pre, [name]: "" }));
    } catch (err) {
      console.log("Error", err);
      setError((prev) => ({ ...prev, [name]: (err as any).message }));
    }
  };

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }
    console.log(e.target.name, "hi");

    validate(e.target.name, selectedFile);
    if (selectedFile) {
      const imgUrl = URL.createObjectURL(selectedFile);
      setValue((preValue) => ({ ...preValue, src: imgUrl }));
    }
  }

  //this function update the card info
  async function handUpdate(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    // Check if there is an error in the src
    if (error.src) {
      return;
    }

    try {
      await schema.validate(value, { abortEarly: false });

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
    } catch (err) {
      console.log("error", err);
      const fieldErrors: { [key: string]: string } = {};

      // Error From Yup
      err.inner.forEach((err: any) => {
        fieldErrors[err.path] = err.message;
      });
      console.log("Field Error  ", fieldErrors);
      setError((prev) => ({
        ...prev,
        ...fieldErrors,
      }));
      return;
    }
    console.log(error);
  }

  return (
    <div className="absolute border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8 rounded-lg shadow-lg">
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
          {error.name && <div className="text-red-500">{error.name}</div>}
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
          {error.age && <div className="text-red-500">{error.age}</div>}
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
          {error.src && <div className="text-red-500">{error.src}</div>}
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
