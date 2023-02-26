import React from "react";
import { Col, Row } from "react-bootstrap";
import fisica3 from "./Guias/fisica3_guia.pdf";
import electro1 from "./Guias/electro1_guia.pdf";
import electro2 from "./Guias/electro2_guia.pdf";
import metodos3 from "./Guias/metodos3_guia.pdf";
import tcye from "./Guias/tcye_guia.pdf";

function Segundo() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons"><a href={fisica3} class="asignatura-link">
      <p class="asignatura">Fundamentos de Física III</p></a>
    </Col>
    <Col xs={4} md={2} className="tech-icons"><a href={metodos3} class="asignatura-link">
      <p class="asignatura">Métodos Matemáticos III</p></a>
    </Col>
    <Col xs={4} md={2} className="tech-icons"><a href={electro1} class="asignatura-link">
      <p class="asignatura">Electromagnetismo I</p></a>
    </Col>
    <Col xs={4} md={2} className="tech-icons"><a href={electro2} class="asignatura-link">
      <p class="asignatura">Electromagnetismo II</p></a>
    </Col>
    <Col xs={4} md={2} className="tech-icons"><a href={tcye} class="asignatura-link">
      <p class="asignatura">Teoría de Circuitos y Electrónica</p></a>
    </Col>
  </Row>
  );
}

export default Segundo;
