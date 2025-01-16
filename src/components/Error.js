import React from "react";
import { useNavigate, useRouteError } from "react-router-dom"; // If using React Router

const Error = () => {
  const navigate = useNavigate();
  const {data,status} = useRouteError() 

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black text-center px-4">
      <h1 className="text-[clamp(24px,4vw,48px)] font-bold text-red-500 mb-4">
        {status}
      </h1>
      <p className="text-[clamp(16px,3vw,24px)] text-gray-700 mb-6">
        {data}
      </p>
      <button
        onClick={() => navigate("/")}
        className="py-2 px-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Go Back to Home
      </button>
    </main>
  );
};

export default Error;
