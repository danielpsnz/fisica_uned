import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Sobre_miCard from "./Sobre_miCard";
import SobreMiImg from "../../Assets/sobremi.jpeg"

function SobreMi() {
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
              Sobre <strong className="purple">mi</strong>
            </h1>
            <Sobre_miCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={SobreMiImg} alt="imagen experiencia" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="cursos-heading">
         <strong className="purple">First </strong> year
        </h1>

        <First />

        <h1 className="cursos-heading">
          <strong className="purple">Second</strong> year
        </h1>
        <Second />

        <h1 className="cursos-heading">
          <strong className="purple">Third</strong> year
        </h1>
        <Third />
      </Container>
    </Container>
  );
}

export default SobreMi;