import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Encontrarás apuntes maravillosos.",
          "Puedes leer mi experiencia.",
          "Podrás descargar exámenes resueltos.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
