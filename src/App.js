import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/LandingPage/LandingPage"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/dashboard">
            <div>dashboard</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
