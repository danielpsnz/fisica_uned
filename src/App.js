import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Experiencia from "./components/Experiencia/Experiencia";
import Guias from "./components/Guias/Guias";
import Examenes from "./components/Examenes/Examenes";
import SobreMi from "./components/Sobre_mi/Sobre_mi";
import Footer from "./components/Footer";
import FF1 from "./components/Experiencia/asignaturas/FF1"
import Biologia from "./components/Experiencia/asignaturas/Biologia"
import FF1_examenes from "./components/Examenes/asignaturas_files/FF1_examenes"
import B_examenes from "./components/Examenes/asignaturas_files/B_examenes"
import Q_examenes from "./components/Examenes/asignaturas_files/Q_examenes"
import MM1_examenes from "./components/Examenes/asignaturas_files/MM1_examenes"
import FF2_examenes from "./components/Examenes/asignaturas_files/FF2_examenes"
import FC1_examenes from "./components/Examenes/asignaturas_files/FC1_examenes"
import TE1_examenes from "./components/Examenes/asignaturas_files/TE1_examenes"
import Al1_examenes from "./components/Examenes/asignaturas_files/Al1_examenes"
import An1_examenes from "./components/Examenes/asignaturas_files/An1_examenes"
import An2_examenes from "./components/Examenes/asignaturas_files/An2_examenes"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/guias" element={<Guias />} />
          <Route path="/examenes" element={<Examenes />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/FF1" element={<FF1 />} />
          <Route path="/Biologia" element={<Biologia />} />
          <Route path="/FF1_examenes" element={<FF1_examenes />} />
          <Route path="/B_examenes" element={<B_examenes />} />
          <Route path="/Q_examenes" element={<Q_examenes />} />
          <Route path="/MM1_examenes" element={<MM1_examenes />} />
          <Route path="/FF2_examenes" element={<FF2_examenes />} />
          <Route path="/FC1_examenes" element={<FC1_examenes />} />
          <Route path="/TE1_examenes" element={<TE1_examenes />} />
          <Route path="/Al1_examenes" element={<Al1_examenes />} />
          <Route path="/An1_examenes" element={<An1_examenes />} />
          <Route path="/An2_examenes" element={<An2_examenes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
