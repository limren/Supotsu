import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
function Index() {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState({});
    useEffect(() => {
        if (localStorage.getItem("loggedIn")) {
            setisLoggedIn(localStorage.getItem("loggedIn"));
        }
        if (localStorage.getItem("user")) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }
        if (localStorage.getItem("token")) {
            setToken(JSON.parse(localStorage.getItem("token")));
        }
    }, []);

    return (
        <div className="index">
            <Navbar
                isLoggedIn={isLoggedIn}
                user={user}
                token={token}
                setisLoggedIn={setisLoggedIn}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default Index;

if (document.getElementById("app")) {
    ReactDOM.createRoot(document.getElementById("app")).render(
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    );
}
