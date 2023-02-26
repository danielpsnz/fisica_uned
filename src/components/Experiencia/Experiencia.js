import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Primero from "./Primero";
import Segundo from "./Segundo";
import ExperienciaCard from "./ExperienciaCard";
import laptopImg from "../../Assets/experiencia.jpeg"

function Experiencia() {
  return (
    <Container fluid className="experiencia-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Mi experiencia <strong className="purple">estudiando Física</strong>
            </h1>
            <ExperienciaCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="imagen experiencia" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="cursos-heading">
         <strong className="purple">Primer </strong> curso
        </h1>

        <Primero />

        <h1 className="cursos-heading">
          <strong className="purple">Segundo</strong> curso
        </h1>
        <Segundo />
      </Container>
    </Container>
  );
}

export default Experiencia;
