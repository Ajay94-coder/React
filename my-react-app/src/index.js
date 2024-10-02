// import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
// import About from "./components/About";  // Assuming you have a component for About
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(//render js code or virtual dom into html dom
  <>
    <React.StrictMode>
     <App/>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
