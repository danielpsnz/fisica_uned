import React from "react";
import { Col, Row } from "react-bootstrap";

function Primero() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><a href={"/FF1_examenes"} class="asignatura-link">
        <p class="asignatura">Fundamentos de Física I</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/B_examenes" class="asignatura-link">
        <p class="asignatura">Biología</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/Q_examenes" class="asignatura-link">
        <p class="asignatura">Química</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/Al1_examanes" class="asignatura-link">
        <p class="asignatura">Álgebra</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/An1_examenes" class="asignatura-link">
        <p class="asignatura">Análisis Matemático I</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/FF2_examenes" class="asignatura-link">
        <p class="asignatura">Fundamentos de Física II</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/TE1_examenes" class="asignatura-link">
        <p class="asignatura">Técnicas Experimentales I</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/An2_examenes" class="asignatura-link">
        <p class="asignatura">Análisis Matemático II</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/FC1_examenes" class="asignatura-link">
        <p class="asignatura">Física Computacional I</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/MM1_examenes" class="asignatura-link">
        <p class="asignatura">Métodos Matemáticos I</p></a>
      </Col>
    </Row>
  );
}

export default Primero;
