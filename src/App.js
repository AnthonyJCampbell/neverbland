import React from 'react';
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from "./routes/HomePage";
import ShowPage from "./routes/ShowPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div data-testid="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/show/:id" render={(props) => <ShowPage {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <br /><br /><br />
      <Footer />
    </div>
  );
}

export default App
