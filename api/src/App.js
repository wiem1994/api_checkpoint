import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar isLogin={isLogin} setIsLogin={setIsLogin} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/users">
                        <UsersList isLogin={isLogin} />
                    </Route>
                    <Route path="/profile/:Id">
                        <Profile isLogin={isLogin} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
