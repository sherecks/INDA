import React from "react";
import  { useRef } from "react";


export function Intro() {

    const videoRef = useRef(null);

    return (
        <div>
            <img src="./src/assets/Imagens/1620.png" className="mx-auto m-4 rounded-xl"></img>
        </div>
    );
}