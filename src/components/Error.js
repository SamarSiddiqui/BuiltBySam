import { useNavigate, useRouteError } from "react-router-dom"; // If using React Router
import { useMagneticEffect } from "../hooks/useMagneticEffect";

const Error = () => {
  const navigate = useNavigate();
  const {data,status} = useRouteError() 
  useMagneticEffect(".button-back", ".button");

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black text-center px-4">
      <h1 className="text-[clamp(24px,4vw,48px)] font-bold text-custom-app mb-4">
        {status}
      </h1>
      <p className="text-[clamp(16px,3vw,24px)] text-custom-vanila mb-6">
        {data}
      </p>
      <div className="button-back ">
      <button
        onClick={() => navigate("/")}
        className="button py-2 px-6 bg-custom-vanila text-black rounded-lg shadow-md hover:bg-[#c2b6a2] transition"
      >
        Go Back to Home
      </button>

      </div>
    </main>
  );
};

export default Error;
