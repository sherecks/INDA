import React from "react";
import  { useRef } from "react";


export function Videos() {

    const videoRef = useRef(null);

    return (
        <div className="relative">

            <div className="mx-auto">
                <video ref={videoRef} className="static inset-0 mx-auto rounded-xl" controls autoPlay loop>
                    <source src="./src/assets/Imagens/TesteSite.mp4" type="video/mp4" />
                </video>
            </div>

        </div>
    );
}