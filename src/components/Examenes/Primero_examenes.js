import React from "react";
import { Col, Row } from "react-bootstrap";

function Primero() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><a href={"/FF1_examenes"} class="asignatura-link">
        <p class="asignatura">Fundamentos de Física I</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/Biologia" class="asignatura-link">
        <p class="asignatura">Biología</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/Quimica" class="asignatura-link">
        <p class="asignatura">Química</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/FF2" class="asignatura-link">
        <p class="asignatura">Fundamentos de Física II</p></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><a href="/Tecnicas1" class="asignatura-link">
        <p class="asignatura">Técnicas Experimentales I</p></a>
      </Col>
    </Row>
  );
}

export default Primero;
