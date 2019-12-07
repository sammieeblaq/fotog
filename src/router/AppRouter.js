import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";


import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";


const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/AboutPage" component={AboutPage} />
                <Route path="/ContactPage" component={ContactPage} />
                <Route path="/ServicePage" component={ServicesPage} />
                {/* <Route path"" component={} /> */}
            </Switch>
        </div>
    </Router>
)

export default AppRouter;