import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Primero from "./Primero";
import Segundo from "./Segundo";
import GuiasCard from "./GuiasCard";
import guiasImg from "../../Assets/guias.jpeg"

function Guias() {
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
              Guías <strong className="purple">completas</strong>
            </h1>
            <GuiasCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={guiasImg} alt="imagen experiencia" className="img-fluid" />
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
    )
}

export default Guias;