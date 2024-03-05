import React from 'react';
import { Cabecalho } from "./assets/Cabecalho";
import { Catalogo } from "./assets/Catalogo";
import { Rodape } from "./assets/Rodape";
import { Videos } from "./assets/Videos"
import { Intro } from "./assets/Intro" 
import { SliderText } from './assets/SliderText';

function App() {

  return(
    <div>
        <Cabecalho />
        <Intro />
        <SliderText />
        <Catalogo />
        <Rodape />
    </div>
  );
}


export default App