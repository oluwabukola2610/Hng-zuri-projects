import React from "react";
import { Routes, Route } from "react-router";
import Contact from "./pages/Contact";
import Stageone from "./pages/Stageone";
import { BrowserRouter } from "react-router-dom";
import './index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Stageone />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;