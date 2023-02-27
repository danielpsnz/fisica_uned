import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Biologia from "./apuntes/Biologia.pdf"

function Bio() {
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
              Biología
            </h1>
            <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <h2 style={{fontSize: "1.8em", paddingBottom: "20px"}}>
                      <span className="purple">Resumen y pre-requisitos</span>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                    La verdad es que al principio yo también me pregunté qué hacía una asignatura de biología en un grado de física, pero resulta que es fundamental para entender cómo funcionan las células y moléculas que componen la materia viva. En esta asignatura aprenderás un montón sobre la estructura y función de las células, cómo se transportan las moléculas a través de ellas y cuáles son sus funciones. Además, verás cómo se llevan a cabo procesos importantes como la división celular, la replicación del ADN y la regulación de la expresión génica. Todo esto es súper importante para comprender las técnicas de manipulación y terapia génica, que pueden ser muy útiles en el diagnóstico y prevención de enfermedades. Así que aunque no parezca muy relacionado con la física, ¡es una asignatura muy interesante y útil!
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    Para que te hagas una idea, se trata de una materia bastante accesible y no es necesario tener muchos conocimientos previos de biología. De hecho, diría que es la más sencilla de todo el cuatrimestre. Incluso si vienes de un Bachillerato de Ciencias Sociales, como yo, podrás comprenderla sin problema. Lo importante es tener una base de química básica, como entender los enlaces químicos, moléculas, átomos y termoquímica. Pero no te preocupes, como la asignatura de Química se cursa en el mismo cuatrimestre, no necesitas haberla cursado previamente. Si por alguna razón, prefieres hacer primero Química, también es una opción.
                    </p>

                    <h2 style={{fontSize: "1.8em", paddingBottom: "15px"}}>
                      <span className="purple">Contenidos</span>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                    Otra cosa no, pero la asignatura es tela de larga. El primer tema es una introducción que te cuenta que es la Biología, cuales son sus 
            fundamentos y qué se busca con su estudio. No estoy aquí para dar consejos porque no soy profesor pero sinceramente creo que con leerlo es 
            más que suficiente. En el segundo tema es donde empieza el contenido de la asignatura en sí. 
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    Empezamos con las biomoléculas, un breve (pero extenso) resumen de que son las proteínas, ácidos nucleicos, hidratos de carbono y lípidos, sus 
            características y funciones. El siguiente tema nos habla de la célula, que tipos hay, cómo están formadas cada una de sus partes y como se comunican 
            entre sí. Después pasamos a metabolismo (empieza la fiesta), aquí es donde empiezan a ser necesarios conocimientos de <a href="../primero/quimica.html">Química</a>. 
            Se estudian las redes metabolicas y la obtención y transformación de la energía en los seres vivos. En el quinto tema se ve el ciclo celular: cómo se divide 
            la celula, citocinesis, reproducción y el control del ciclo célular (aplicación en el área del cáncer). 
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    Aquí empieza en mi opinión la segunda parte de la asignatura, que tiene más que ver con el ADN y la ingeniería genética. El primer tema nos habla de la replicación 
            del DNA (la composición química y estructura del DNA, replicación, telómeros y reparación de errores). Luego hablamos de transcripción y traducción del DNA: el código
            genético, mecanismos de regulación de la traducción, modificaciones postraduccionales y mutaciones. Los dos últimos temas nos hablan de la expresión de la información génica 
            (organización del genoma en eucariotas, tamaño del genoma, tipos de secuencias, estructura de los genes y regulación) y de las aplicaciones de todo esto en 
            ingeniería genética y la biotecnología. 
                    </p>

                    <h2 style={{fontSize: "1.8em", paddingBottom: "15px"}}>
                      <span className="purple">Sistema de evaluación</span>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                    El sistema de evaluación consiste en un examen de 10 preguntas cortas sobre el temario. Es un examen muy asequible que se debe completar en 120 minutos. Es muy importante 
          saber sintetizar ya que hay que contestar cada pregunta en el hueco correspondiente sin salirse, lo cual se puede practicar realizando las dos PECs correspondientes a lo largo del 
          cuatrimestre.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    En cuanto a las PECs son dos pruebas que abarcan cada una la mitad del temario aproximadamente. Algo a tener en cuenta es que hay que aprobar el examen con un 5 para que 
          te cuente la nota de las PECs. Además de esto y del examen de desarrollo, hay que realizar unas prácticas, en el caso del grado en Física consiste en un cuestionario en la moodle 
          sobre experimentos en un laboratorio. Estas prácticas no cuentan para la nota final pero es necesario aprobar el cuestionario (tienes dos intentos) para aprobar la asignatura. 
                    </p>

                    <h2 style={{fontSize: "1.8em", paddingBottom: "15px"}}>
                      <span className="purple">Experiencia y dificultades</span>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                    Como ya he dicho, me ha parecido la asignatura más asequible del cuatrimestre. Tened en cuenta que yo no curso las asignaturas de matemáticas porque soy estudiante de 
            último año de matemáticas y economía en otra universidad y pretendo convalidarlas, así que no os puedo hacer una comparación de todas las asignaturas. A continuación os 
            explico como me he organizado y cuál ha sido mi método de estudio para aprobar esta asignatura. 
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    La empecé a estudiar a mediados de septiembre, cuando empezaron las clases en las universidades presenciales. Con ayuda de Wuolah y el libro de texto cree los <a href="./assets/apuntes/Biolog_a.pdf">apuntes</a>
            según la guía de la UNED. Esto es muy importante que lo reviseis ya que cada año puede cambiar el temario y podreis descartar o tener que añadir parte del temario, asi que os recomiendo que, 
            aunque os descargueis los apuntes, reviseis que esta completo. Yo fui creando los apuntes a medida que pasaba el cuatrimestre, no seguía el tempo que llevan las tutorías de la UNED, ya que estas 
            comienzan a principios de Octubre. 
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    En primer lugar siempre creo dos archivos. El primero es un documento excel donde pongo los titulos de cada tema y las partes que, en el futuro, tendré que estudiar o hacer para llevar la 
            asignatura preparada al examen. En este caso las columnas son sólo teoría y examenes anteriores porque es una asignatura muy teórica. El segundo documento es un word, donde 
            divido el tiempo del cuatrimestre en semanas (saldrá aproximadamente unas 12 semanas sin contar vacaciones), ese es el tiempo que dedicaré a la asignatura. Una vez hecho esto, voy 
            dividiendo el contenido de la asignatura en estas 12 semanas. Aquí os dejo de ejemplo el mio:
                    </p>


                    </blockquote>

                    <ul className="organizacion">
                      <li className="experiencia-activity2">
                        SEMANA 1 (19-25 SEPT) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Hacer resumen del tema 1.</li>
                          </ul>  
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 2 (26-02 OCT) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Hacer resumen del tema 2 hasta hidratos de carbono.</li>
                          <li className="experiencia-activity"><ImPointRight /> Leer tema 1.</li>
                          </ul>    
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 3 (03-09 OCT) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Terminar el resumen del tema 2.</li>
                          <li className="experiencia-activity"><ImPointRight /> Hacer resumen tema 3 hasta membrana plasmática.</li>
                          <li className="experiencia-activity"><ImPointRight /> Leer lo anterior.</li>
                          </ul>    
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 4 (10-16 OCT) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Terminar el resumen del tema 3.</li>
                          <li className="experiencia-activity"><ImPointRight /> Leer lo anterior.</li>
                          </ul>     
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 5 (17-23 OCT): SEMANA DE DESCANSO   
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 6 (24-30 OCT) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Hacer resumen del tema 4.</li>
                          </ul>     
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 7 (31-06 NOV) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Hacer resumen del tema 5 hasta control del ciclo celular.</li>
                          <li className="experiencia-activity"><ImPointRight /> Leer tema 4.</li>
                          </ul>     
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 8 (07-13 NOV) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Terminar el resumen del tema 5.</li>
                          <li className="experiencia-activity"><ImPointRight /> Hacer resumen tema 6 hasta composición química del DNA.</li>
                          <li className="experiencia-activity"><ImPointRight /> Leer desde el tema 4.</li>
                          </ul>     
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 9 (14-20 NOV) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Terminar el resumen del tema 6.</li>
                          <li className="experiencia-activity"><ImPointRight /> Hacer resumen del tema 7 hasta síntesis del RNA.</li>
                          <li className="experiencia-activity"><ImPointRight /> Leer desde el tema 4.</li>
                          </ul>     
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 10 (21-27 NOV): SEMANA DE DESCANSO   
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 11 (28-04 DEC) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Terminar el resumen del tema 7.</li>
                          <li className="experiencia-activity"><ImPointRight /> Hacer resumen del tema 8 hasta estructura de los genes.</li>
                          </ul>     
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 12 (05-11 DEC) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Terminar resumen del tema 8.</li>
                          <li className="experiencia-activity"><ImPointRight /> Hacer resumen del tema 9 hasta tecnología del DNA recombinante. </li>
                          <li className="experiencia-activity"><ImPointRight /> Leer desde el tema 7.</li>
                          </ul>     
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 13 (12-18 DEC) <ul>
                          <li className="experiencia-activity"><ImPointRight /> Terminar resumen.</li>
                          <li className="experiencia-activity"><ImPointRight /> Leer desde el tema 7.</li>
                          </ul>     
                      </li>

                      <li className="experiencia-activity2">
                        SEMANA 14 (09-15 ENE) <ul>
                          <li className="experiencia-activity"><ImPointRight />  Repaso de la asignatura.</li>
                          <li className="experiencia-activity"><ImPointRight /> Exámenes de años anteriores.</li>
                          </ul>     
                      </li>
                    </ul>
                </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons"><a href={Biologia} class="asignatura-link">
                <p class="asignatura">Descargar apuntes</p></a>
            </Col>
        </Row>    
      </Container>
    </Container>
  );
}

export default Bio;