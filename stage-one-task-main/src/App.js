import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Stageone from "./pages/Stageone";
import './index.css'

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Stageone />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
