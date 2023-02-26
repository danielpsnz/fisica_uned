import React from "react";
import Card from "react-bootstrap/Card";

function GuiasCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            En esta sección, podréis descargar la <span className="purple">guía completa </span> 
            de la asignatura que deseéis. Tened en cuenta que normalmente será del año en que la cursé y 
            los contenidos podrían haber cambiado, aun así, intentaré actualizarla si tengo oportunidad. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default GuiasCard;