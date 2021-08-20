import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTable from "../pages/CreateTable";
import Home from "../pages/Home";

// import { Container } from './styles';

function Routes() {
  return (
    <Router>
      <Route path={["/", "/home"]} exact strict component={Home} />
      <Route path={"/create-team"} exact strict component={CreateTable} />
      <Route path={"/create-table"} exact strict component={CreateTable} />
      <Route path={"/insert-team"} exact strict component={Home} />
      <Route path={"/add-points"} exact strict component={Home} />
    </Router>
  );
}

export default Routes;
