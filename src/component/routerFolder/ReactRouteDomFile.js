import React from "react";
import { NavBar } from "./navBar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Home } from "../home";
import HomePage from "./homePage";
import AboutPage from "./aboutPage";
import ContactPage from "./contactPage";
import PageNotFound from "./pageNotFound";
// import { Router } from "react-router-dom/cjs/react-router-dom.min";

export const ReactRouteDomFile = () => {
  return (
    <>
      <h1>REACT ROUTE DOM V5</h1>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about/:dynamicData" component={AboutPage} />
          <Route exact path="/contact">
            <ContactPage nameProps="test for contact page" />
          </Route>
          <Route exact path="/allFunctionality" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
