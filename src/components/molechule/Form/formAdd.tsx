"use client";
import schema from "@/components/validetion/schema";
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
    validateForm(e.target.name, e.target.value);
  }

  //this state store the error of the input
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    src: "",
  });

  const validateForm = async (name: string, value: any) => {
    try {
      await schema.validateAt(name, { [name]: value });
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (error) {
      console.log("Error", error);
      setErrors((prev) => ({ ...prev, [name]: (error as any).message }));
    }
  };

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }
    validateForm(e.target.name, selectedFile);
    if (selectedFile) {
      const imgUrl = URL.createObjectURL(selectedFile);
      setValue((preValue) => ({ ...preValue, src: imgUrl }));
    }
  }

  async function handleCreate(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    // Check if there is an error in the src
    if (errors.src) {
      return;
    }

    // Check the value that input with the schema
    try {
      await schema.validate(value, { abortEarly: false });

      const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
      const newUser = { ...value, id: newId };
      setInfo((preList: any) => [...preList, { ...value, id: newUser }]);
    } catch (err) {
      console.log("error", err);
      const fieldErrors: { [key: string]: string } = {};

      // Error From Yup
      err.inner.forEach((err: any) => {
        fieldErrors[err.path] = err.message;
      });
      console.log("Field Error  ", fieldErrors);
      setErrors((prev) => ({
        ...prev,
        ...fieldErrors,
      }));
      return;
    }
    
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
          {errors.name && <div className="text-red-500">{errors.name}</div>}
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
          {errors.age && <div className="text-red-500">{errors.age}</div>}
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
          {errors.src && <div className="text-red-500">{errors.src}</div>}
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
