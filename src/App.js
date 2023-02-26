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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;