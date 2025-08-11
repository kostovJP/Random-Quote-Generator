// import { useState } from "react";

export default function Navbar({ colorInfo, colorFunc }) {
  const changeColor = () => {
    if (colorInfo === "dark") {
      colorFunc("light");
    } else colorFunc("dark");
  };
  return (
    <div
      className={`border-none w-full h-12 
            ${
              colorInfo === "dark"
                ? "bg-zinc-900 text-white shadow-sm shadow-black"
                : "bg-[#cb997e] text-[#772f1a] shadow-sm shadow-gray-500"
            } 
            grid md:grid-cols-5 xs:grid-cols-3 content-center`}
    >
      <span className="col-start-1 md:col-start-3 text-center text-xl tracking-widest md:w-50">
        RANDOM QUOTES
      </span>
      <span
        className="col-start-3 md:col-start-5 flex justify-center
            "
      >
        <button
          className={`text-center ${
            colorInfo === "dark" ? "hover:bg-gray-700" : "hover:bg-[#b07d62]"
          }
                    px-3 rounded-xl transition-all delay-100
                    hover:cursor-pointer
                `}
          onClick={changeColor}
        >
          {colorInfo === "light" ? "dark" : "light"}
        </button>
      </span>
    </div>
  );
}
