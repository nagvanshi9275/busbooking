//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import About from "./About";

import Home from "./Home";

//import Detail from "./Detail";

import "./server";

import React from "react";
import Detail from "./Detail";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

     <Route path="/:id" element={<Detail/>}/>


    </Routes>
  </BrowserRouter>
);
