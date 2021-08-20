import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPoint from "../pages/AddPoint";
import CreateTable from "../pages/CreateTable";
import CreateTeam from "../pages/CreateTeam";
import Home from "../pages/Home";
import InsertTeamInTable from "../pages/InsertTeamInTable";

// import { Container } from './styles';

function Routes() {
  return (
    <Router>
      <Route path={["/", "/home"]} exact strict component={Home} />
      <Route path={"/create-team"} exact strict component={CreateTeam} />
      <Route path={"/create-table"} exact strict component={CreateTable} />
      <Route path={"/insert-team"} exact strict component={InsertTeamInTable} />
      <Route path={"/add-points"} exact strict component={AddPoint} />
    </Router>
  );
}

export default Routes;
