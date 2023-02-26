import React from "react";
import Card from "react-bootstrap/Card";

function SobreMiCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Me llamo Daniel Pérez y tengo 21 años. Soy estudiante de último año de Economía y Matemáticas 
            en la Universidad de York. Estuve trabajando en el Ministerio de Justicia de Reino Unido como 
            estadístico de prisiones durante un año, en el cual empecé Física por amor al arte. 
          </p>
          <p style={{ textAlign: "justify" }}>
            Dado que estudio <span className="purple">Matemáticas </span> en Inglaterra, la mayoría de asignaturas
            me las convalidan, por eso no las estoy cursando y no os puedo ofrecer recursos ni opiniones sobre esas 
            asignaturas, que son bastantes. Por eso he decidido abrir esta sección para dejaros también disponibles 
            mis apuntes de la Universidad de York. Están en inglés pero espero que os sirvan de ayuda. 
          </p>
          <p style={{ textAlign: "justify" }}>
            Pd: Si aún no los veis disponibles no es porque os vaya mal el ordenador, es que estoy actualizandolos y poniendolos 
            decentes antes de subirlos, los iré subido poco a poco conforme avancen las semanas. Sed pacientes!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SobreMiCard;