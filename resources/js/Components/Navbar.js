import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, user, token, setisLoggedIn }) {
    const handleLogout = () => {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        axios
            .get("http://supotsu.test/api/logout", config)
            .then((res) => console.log(res));
        localStorage.setItem("loggedIn", false);
        setisLoggedIn(false);
    };
    const LoggedIn = () => {
        return (
            <ul className="logged">
                <Link to="/" onClick={() => handleLogout()}>
                    <li>HI {user.name}, LOGOUT</li>
                </Link>
            </ul>
        );
    };
    const IsNotLogged = () => {
        return (
            <ul className="not-logged">
                <Link to="/login">
                    <li>LOGIN</li>
                </Link>
                <Link to="/register">
                    <li>REGISTER</li>
                </Link>
            </ul>
        );
    };
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <li>SUPOTSU</li>
            </div>
            <div className="navbar-nav">
                <ul>
                    <li>BROWSE</li>
                    <li>CATEGORY</li>
                </ul>
            </div>
            <div className="navbar-connection">
                {isLoggedIn ? <LoggedIn /> : <IsNotLogged />}
            </div>
        </div>
    );
}

export default Navbar;
