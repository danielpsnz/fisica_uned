import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienciaCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            En esta sección, podréis seleccionar la <span className="purple">asignatura </span>
            que deseéis y conocer mi <span className="purple"> experiencia</span> estudiándola, 
            cómo me organicé, las dificultades que enfrenté y su estructura general. Para ello, 
            solo tenéis que hacer clic en la asignatura correspondiente. Normalmente la estructura 
            es la siguiente:
          </p>
          <ul>
            <li className="experiencia-activity">
              <ImPointRight /> Resumen de la asignatura y los pre-requisitos
            </li>
            <li className="experiencia-activity">
              <ImPointRight /> Contenidos
            </li>
            <li className="experiencia-activity">
              <ImPointRight /> Sistema de evaluación
            </li>
            <li className="experiencia-activity">
              <ImPointRight /> Dificultades y organización
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienciaCard;
