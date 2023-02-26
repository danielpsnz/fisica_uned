import React from "react";
import { Col, Row } from "react-bootstrap";

function Segundo() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons"><a href="./Asignatura/FF1" class="asignatura-link">
      <p class="asignatura">Fundamentos de Física III</p></a>
    </Col>
    <Col xs={4} md={2} className="tech-icons"><a href="./Asignatura/Biologia" class="asignatura-link">
      <p class="asignatura">Mecánica Clásica</p></a>
    </Col>
    <Col xs={4} md={2} className="tech-icons"><a href="./Asignatura/Quimica" class="asignatura-link">
      <p class="asignatura">Electromagnetismo I</p></a>
    </Col>
    <Col xs={4} md={2} className="tech-icons"><a href="./Asignatura/FF2" class="asignatura-link">
      <p class="asignatura">Electromagnetismo II</p></a>
    </Col>
    <Col xs={4} md={2} className="tech-icons"><a href="./Asignatura/TE1" class="asignatura-link">
      <p class="asignatura">Técnicas Experimentales II</p></a>
    </Col>
    <Col xs={4} md={2} className="tech-icons"><a href="./Asignatura/FF2" class="asignatura-link">
      <p class="asignatura">Vibraciones y Ondas</p></a>
    </Col>
    <Col xs={4} md={2} className="tech-icons"><a href="./Asignatura/TE1" class="asignatura-link">
      <p class="asignatura">Teoría de Circuitos y Electrónica</p></a>
    </Col>
  </Row>
  );
}

export default Segundo;
