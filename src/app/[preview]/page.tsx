"use client";

import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useParams();
  return (
    <div>
      <h2>Preview Page</h2>
      <p>This user is {router.preview}</p>
    </div>
  );
};

export default Page;
