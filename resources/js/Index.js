import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Article from "./Components/Article";
import Browse from "./Components/Browse";
import Category from "./Components/Category";
import ProtectedRoute from "./Components/ControllerComponent/ProtectedRoute";
import Profile from "./Components/Profile";
function Index() {
    const [isLoggedIn, setisLoggedIn] = useState(isLoggedIn || false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState({});

    useEffect(() => {
        if (localStorage.getItem("loggedIn")) {
            setisLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
        }
        if (localStorage.getItem("user")) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }
        if (localStorage.getItem("token")) {
            setToken(JSON.parse(localStorage.getItem("token")));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("loggedIn", isLoggedIn);
    }, [isLoggedIn]);
    return (
        <div className="index">
            <Navbar
                isLoggedIn={isLoggedIn}
                user={user}
                token={token}
                setisLoggedIn={setisLoggedIn}
                setUser={setUser}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="login"
                    element={
                        <Login
                            setisLoggedIn={setisLoggedIn}
                            setUser={setUser}
                        />
                    }
                />
                <Route path="browse" element={<Browse user={user} />} />
                <Route path="register" element={<Register />} />
                <Route path="category" element={<Category user={user} />} />
                <Route path="articles/:id" element={<Article user={user} />} />
                <Route
                    path="profile"
                    element={
                        <ProtectedRoute user={user}>
                            <Profile user={user} />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default Index;

if (document.getElementById("app")) {
    ReactDOM.createRoot(document.getElementById("app")).render(
        <HashRouter>
            <Index />
        </HashRouter>
    );
}
