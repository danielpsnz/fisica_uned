import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Card from "react-bootstrap/Card";

function Fundamentos1() {
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
              Fundamentos de Física I 
            </h1>
            <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <h2 style={{fontSize: "1.8em", paddingBottom: "15px"}}>
                        Resumen y pre-requisitos
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                    Esta asignatura es la típica del primer cuatrimestre de todas las carreras de Física. 
                    Consiste en un bloque de asignaturas que tiene tres partes y donde vais a tocar 
                    absolutamente todas las ramas de la Física de una manera introductoria. Empieza desde 
                    el principio por lo que no necesitas ningún conocimiento previo de Física pero, y esto es 
                    muy importante, si que lo necesitas de matemáticas.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    Yo os recomendaría que de matemáticas tengais claros conceptos como limites, derivadas, 
                    integración, lo básico de vectores y trigonometria. Si no lo habeis visto nunca se os va a 
                    hacer muy duro ya que se empieza desde el minuto 1 dando por hecho que estos conceptos se tienen 
                    claros y se dominan con bastante fluidez. Tengo que añadir también que en el mismo cuatrimestre 
                    tendreis dos asignaturas en las que reforzareis estos conceptos: Álgebra y Análisis Matemático I. 
                    Aún así, es imprescindible saber manipular todo lo anterior antes de empezar el curso.
                    </p>
                    </blockquote>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Fundamentos1;