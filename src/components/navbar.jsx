import { useState } from "react";

export default function Navbar(){
    return (
        <div className="border-none shadow-sm shadow-black w-full h-12 bg-zinc-900 text-white
            grid md:grid-cols-5 xs:grid-cols-3 content-center
        ">
            <span className="col-start-1 md:col-start-3 text-center text-xl tracking-widest md:w-50">RANDOM QUOTES</span>
            <span className="col-start-3 md:col-start-5 flex justify-center
            ">
                <button className="text-center hover:bg-gray-700 
                    px-3 rounded-xl transition-all delay-100 active:bg-gray-500
                ">light</button> 
            </span>
        </div>
    )
}