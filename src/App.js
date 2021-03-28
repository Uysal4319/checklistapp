import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

export default function App() {
    return (
        <Router>
            <div>


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/">
                        <LoginPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function About() {
    return <h2> hakkımızda birşeyler </h2>;
}

function Users() {
    return <h2> Harbi Soft </h2>;
}
