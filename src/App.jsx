import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Home from "./pages/Home"
import About from "./pages/About"
import Clients from "./pages/Clients";
import Services from "./pages/Services";
import Knowledge from "./pages/Knowledge";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/" element={<About/>} />
        <Route path="/" element={<Clients/>} />
        <Route path="/" element={<Services/>} />
        <Route path="/" element={<Knowledge/>} />
       
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

