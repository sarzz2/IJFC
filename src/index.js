import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutUs from "./components/AboutUs/AboutUs";
import Event from "./components/Event/event";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/event" element={<Event />} />
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
  </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

reportWebVitals();
