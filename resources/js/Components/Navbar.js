import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, user, token, setisLoggedIn }) {
    useEffect(() => {
        console.log(isLoggedIn);
    }, []);
    const handleLogout = () => {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        axios
            .get("http://supotsu.test/api/logout", config)
            .then((res) => console.log(res));
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
                <li>
                    <Link to="/">SUPOTSU</Link>
                </li>
            </div>
            <div className="navbar-nav">
                <ul>
                    <li>
                        <Link to="/browse">BROWSE</Link>
                    </li>
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
