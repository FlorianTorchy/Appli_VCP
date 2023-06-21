import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import Index from "./pages/Index";
import Ecran from "./pages/Ecran";
import Footer from "./pages/Footer";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sticky-top">
        <Header />
      </div>

      <div className="container-fluid m-0 p-0 col-12 ">
        <div className="row m-0">
          <div id="sidebarMenu" className="col-2 p-0 m-0">
            <Sidebar />
          </div>

          {/* texte break pour éviter le dépassement horizontal */}
          <div className="container p-2 col-10 text-break">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ecran" element={<Ecran />} />
            </Routes>
          </div>
        </div>
      </div>

      {/* Container fluid,  margin:0,  padding:0, sticky pour rester
         dans le flux de la page et bottom pour qu'il reste fixer au bas de la page */}
      <div className="container-fluid m-0 p-0 sticky-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;
