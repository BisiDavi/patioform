import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FormLayout } from "../imports";

const Approutes = () => {
  return (
    <Router>
      <Route path="/" component={FormLayout} />
    </Router>
  );
};

export default Approutes;
