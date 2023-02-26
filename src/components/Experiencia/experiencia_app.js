import React, { useState, useEffect } from "react";
import Preloader from "../Pre";
import FF1 from "./asignaturas/FF1";
import FF2 from "./asignaturas/FF2";
import Biologia from "./asignaturas/Biologia";
import Quimica from "./asignaturas/Quimica";
import Tecnicas1 from "./asignaturas/Tecnicas1";
import Experiencia from "./Experiencia";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import "../../index.css";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ExperienciaApp() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        upadateLoad(false);
      }, 1200);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <Router>
        <Experiencia />
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path="/FF1" element={<FF1 />} />
            <Route path="/FF2" element={<FF2 />} />
            <Route path="/Biologia" element={<Biologia />} />
            <Route path="/Quimica" element={<Quimica />} />
            <Route path="/Tecnicas1" element={<Tecnicas1 />} />
          </Routes>
        </div>
      </Router>
    );
}

export default ExperienciaApp;
