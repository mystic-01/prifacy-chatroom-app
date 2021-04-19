import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

import './App.css';

const App = () => (
    <Router>
        <Route path="/" component={LandingPage} exact />
        <Route path="/join" component={Join} exact />
        <Route path="/chat" component={Chat} />
    </Router>
);

export default App;