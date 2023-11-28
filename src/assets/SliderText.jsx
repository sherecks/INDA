import { useState, useEffect } from "react";
import React from "react";

export function SliderText() {

    const [textIndex, setTextIndex] = useState(0);

    const texts = [
      {
        content: "Robert Nesta Marley, mais conhecido pelo nome artístico Bob Marley, foi um cantor e compositor jamaicano.",
        size: "text-xl"
      },
      {
        content: "O OutKast foi uma dupla de rappers de Atlanta, Geórgia. Formada por André Lauren Benjamin e Antwan André Patton. Seu estilo musical foi uma mistura de elementos de Dirty South e G-Funk.",
        size: "text-xl"
      },
      {
        content: "Busta Rhymes, nome artístico de Trevor Tahiem Smith Jr. Chuck D do Public Enemy deu-lhe o apelido Busta Rhymes em homenagem ao wide receiver da NFL George 'Buster' Rhymes.",
        size: "text-xl"
      },
      {
        content: "The Source é um sítio americano de hip hop e entretenimento e uma revista que publica anualmente ou semestralmente. É o periódico de rap mais antigo do mundo, sendo fundado como um boletim informativo em 1988.",
        size: "text-xl"
      }
    ];
  
    useEffect(() => {

      const textInterval = setInterval(() => {
        setTextIndex((textIndex + 1) % texts.length);
      }, 6000);

      return () => {
        clearInterval(textInterval);
      };

    }, [textIndex]);

  
    return (
      <div>

        <div className="flex">
          <p className={`m-4 mx-auto text-center ${texts[textIndex].size}`}>{texts[textIndex].content}</p>
        </div>

      </div>
    );
}



