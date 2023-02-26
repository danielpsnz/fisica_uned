import React from "react";
import { Col, Row } from "react-bootstrap";
import fisica1 from "./Guias/fisica1_guia.pdf";
import analisis1 from "./Guias/analisis1_guia.pdf";
import analisis2 from "./Guias/analisis2_guia.pdf";
import fisica2 from "./Guias/fisica2_guia.pdf";
import metodos1 from "./Guias/metodos1_guia.pdf";
import tecnicas1 from "./Guias/tecnicas1_guia.pdf";
import computacional1 from "./Guias/computacional1_guia.pdf";
import quimica from "./Guias/quimica_guia.pdf";
import biologia from "./Guias/biologia_guia.pdf";
import algebra from "./Guias/algebra_guia.pdf";


function Primero() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><a href={fisica1} class="asignatura-link">
        <p class="asignatura">Fundamentos de Física I</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href={biologia} class="asignatura-link">
        <p class="asignatura">Biología</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href={quimica} class="asignatura-link">
        <p class="asignatura">Química</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href={algebra} class="asignatura-link">
        <p class="asignatura">Álgebra</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href={analisis1} class="asignatura-link">
        <p class="asignatura">Análisis Matemático I</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href={fisica2} class="asignatura-link">
        <p class="asignatura">Fundamentos de Física II</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href={tecnicas1} class="asignatura-link">
        <p class="asignatura">Técnicas Experimentales I</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href={metodos1} class="asignatura-link">
        <p class="asignatura">Métodos Matemáticos I</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href={analisis2} class="asignatura-link">
        <p class="asignatura">Análisis Matemático II</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href={computacional1} class="asignatura-link">
        <p class="asignatura">Física Computacional I</p></a>
      </Col>
    </Row>
  );
}

export default Primero;