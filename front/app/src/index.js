import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";

import App from "./components/App";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

const Root = () => (
  <Router>
    <Routes>
      {/* old syntax was <Route path="/" component={App} /> */}
      <Route exact path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

reportWebVitals();
