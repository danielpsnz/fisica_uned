import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Primero from "./Primero_examenes";
import Segundo from "./Segundo_examenes";
import ExamenesCard from "./ExamenesCard";
import examenesImg from "../../Assets/examenes.jpeg"

function Examenes() {
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
              Exámenes <strong className="purple">de años anteriores</strong>
            </h1>
            <ExamenesCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={examenesImg} alt="imagen examenes" className="img-fluid" />
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

export default Examenes;