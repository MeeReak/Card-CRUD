"use client";
import React, { useState } from "react";

interface FormAddProps {
  setInfo: (value: any) => void;
}

const FormAdd: React.FC<FormAddProps> = ({ setInfo }) => {
  const [value, setValue] = useState({
    id: "",
    name: "",
    age: "",
    src: null,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const [file, setFile] = useState(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
  }

  function handleCreate(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
    const newUser = { ...value, id: newId };
    setInfo((preList: any) => [
      ...preList,
      { ...value, id: newUser, src: file ? URL.createObjectURL(file) : null },
    ]);

    setValue({
      id: "",
      name: "",
      age: "",
      src: null,
    });
    setFile(null);
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

        <button
          className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default FormAdd;
