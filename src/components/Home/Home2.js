import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ¿Estás estudiando <span className="purple"> Física en la UNED </span> y 
              no sabes cómo salir de este agujero negro? Bienvenido a la solución:
            </h1>
            <p className="home-about-body">
              Cuando empecé a estudiar en la UNED, si os soy 
              sincero, estaba más perdido que el barco del arroz, no tenía ni idea de cómo 
              guiarme, organizarme, autoexplicarme cosas... 🤷‍♂️
              <br />
              <br />Este proyecto nace de esta sensación que tuve. En esta página web está
              creada totalmente desde cero por mí y puedes encontrar su código en GitHub. Aquí puedes 
              <i>
                <b className="purple"> descargar apuntes, guías, exámenes </b>
              </i>
              y leer la experiencia que tuve estudiando las asignaturas.
              <br />
              <br />
              No te preocupes si no encuentras o no puedes descargar lo que quieres, estoy aún aprendiendo 
              a crear la página y preparando todo el material pero iré actualizando cada semana. &nbsp;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Puedes seguirme en:</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/danielpsnz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/danielpsnz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/danielpsnz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/danielpsnz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
