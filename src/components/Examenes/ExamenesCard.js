import React from "react";
import Card from "react-bootstrap/Card";

function ExamenesCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            En esta sección encontrareis <span className="purple">exámenes de años anteriores</span>. 
            En la mayoría de asignaturas, y conforme vaya actualizando la página, estarán resueltos. Si 
            veis fallos o alguna mejora que haga falta no dudeis en contactar conmigo a través de mis redes 
            sociales.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExamenesCard;