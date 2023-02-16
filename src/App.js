// import { useState } from "react";
import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";

import "./styles/reset.css";
import "./styles/style.css";

import forca0 from "./assets/forca0.png";
//import forca1 from "./assets/forca0.png";
//import forca2 from "./assets/forca0.png";
//import forca3 from "./assets/forca0.png";
//import forca4 from "./assets/forca0.png";
//import forca5 from "./assets/forca0.png";
//import forca6 from "./assets/forca0.png";

//const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function App() {
  return (
    <>
      <Jogo image={forca0} palavra="" />
      <Letras state={true} />
    </>
  );
}
