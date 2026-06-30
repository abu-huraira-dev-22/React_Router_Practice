import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import About from "./Pages/About/index.jsx";
import Contact from "./App.jsx";
import Jobs from "./Pages/Jobs/index.jsx";
import SingleJob from "./Pages/SingleJob/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:uniqueId" element={<SingleJob />} />
    </Routes>
  </BrowserRouter>,
);
