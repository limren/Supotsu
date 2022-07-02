import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, user, token, setisLoggedIn }) {
    const handleLogout = () => {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        axios
            .get("http://supotsu.test/api/logout", config)
            .then((res) => console.log(res));
        setisLoggedIn(false);
    };
    const LoggedIn = () => {
        return (
            <div>
                <p>Welcome back, {user.name} !</p>
                <Link to="/" onClick={() => handleLogout()}>
                    Logout
                </Link>
            </div>
        );
    };
    const IsNotLogged = () => {
        return (
            <ul>
                <Link to="/login">
                    <li>Log in</li>
                </Link>
                <Link to="/register">
                    <li>Register</li>
                </Link>
            </ul>
        );
    };
    return (
        <div>
            <div className="">
                {isLoggedIn ? <LoggedIn /> : <IsNotLogged />}
            </div>
        </div>
    );
}

export default Navbar;
