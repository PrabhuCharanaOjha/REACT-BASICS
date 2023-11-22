import React from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import {BaseComponentMainPage} from "./baseComponents/baseComponentMainPage"
import HomePage from "./homePage";
import AboutPage from "./aboutPage";
import ContactPage from "./contactPage";
import PageNotFound from "./pageNotFound";
// import { Router } from "react-router-dom/cjs/react-router-dom.min";

export const NavBar = () => {
	return (
		<>
			<h1>REACT ROUTE DOM V5</h1>
			<BrowserRouter>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<NavLink className="navbar-brand" exact to="/">Navbar</NavLink>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<NavLink className="nav-link" exact to="/" activeStyle={{ fontWeight: "bold", color: "red" }}>HOME</NavLink>
							</li>
							<li className="nav-item active">
								<NavLink className="nav-link" exact to="/about" activeStyle={{ fontWeight: "bold", color: "red" }}>ABOUT</NavLink>
							</li>
							<li className="nav-item active">
								<NavLink className="nav-link" exact to="/contact" activeStyle={{ fontWeight: "bold", color: "red" }}>CONTACT</NavLink>
							</li>
							<li className="nav-item active">
								<NavLink className="nav-link" exact to="/allFunctionality" activeStyle={{ fontWeight: "bold", color: "red" }}>ALL FUNCTIONALITY</NavLink>
							</li>
						</ul>
					</div>
				</nav>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about/:dynamicData" component={AboutPage} />
					<Route exact path="/contact">
						<ContactPage nameProps="test for contact page" />
					</Route>
					<Route exact path="/allFunctionality" component={BaseComponentMainPage} />
					<Route component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		</>
	);
};
