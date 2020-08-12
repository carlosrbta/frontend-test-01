import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container, Navbar, Form, FormControl } from "react-bootstrap";

import Widget from "./pages/Widget";
import WidgetForm from "./pages/Widget/form";

import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#home" className="mr-auto">
            <img src={logo} className="brand-logo" alt="Delfos Logo" />
          </Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Widget />
        </Route>
        <Route path="/Widget">
          <WidgetForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
