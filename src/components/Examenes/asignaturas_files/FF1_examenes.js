import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import examen2022 from "../asignaturas/Primero/FF1/2022.pdf";
import examen2020 from "../asignaturas/Primero/FF1/2020.pdf";
import examen2019 from "../asignaturas/Primero/FF1/2019.pdf";
import examen2018 from "../asignaturas/Primero/FF1/2018.pdf";
import examen2017 from "../asignaturas/Primero/FF1/2017.pdf";

function Fundamentos1() {
    return(
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
              Fundamentos de Física I 
            </h1>
            <p className="purple" style={{ textAlign: "center" }}>
            Haz click en el año del que desees descargar los exámenes. 
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons"><a href={examen2022} class="asignatura-link">
                <p class="asignatura">2022</p></a>
            </Col>
            <Col xs={4} md={2} className="tech-icons"><a href={examen2020} class="asignatura-link">
                <p class="asignatura">2020</p></a>
            </Col>
            <Col xs={4} md={2} className="tech-icons"><a href={examen2019} class="asignatura-link">
                <p class="asignatura">2019</p></a>
            </Col>
            <Col xs={4} md={2} className="tech-icons"><a href={examen2018} class="asignatura-link">
                <p class="asignatura">2018</p></a>
            </Col>
            <Col xs={4} md={2} className="tech-icons"><a href={examen2017} class="asignatura-link">
                <p class="asignatura">2017</p></a>
            </Col>
        </Row>
        
        <Row style={{ justifyContent: "center", paddingBottom: "240px" }}>

        </Row>
     </Container>
    </Container>
    );
}

export default Fundamentos1;