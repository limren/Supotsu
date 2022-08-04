import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
function Login({ setisLoggedIn, setUser }) {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            axios.get("/sanctum/csrf-cookie").then((res) => {
                axios
                    .post("http://supotsu.test/api/login", data)
                    .then((res) => {
                        localStorage.setItem(
                            "user",
                            JSON.stringify(res.data.user)
                        );
                        localStorage.setItem(
                            "token",
                            JSON.stringify(res.data.token)
                        );
                        setUser(localStorage.getItem("user"));
                        setisLoggedIn(true);
                        location.assign("http://supotsu.test/");
                    })
                    .catch((e) => console.log(e));
            });
        } catch (error) {
            console.log(error);
        }
    };
    const handleEmail = (e) => {
        setData({
            ...data,
            email: e.target.value,
        });
    };
    const handlePassword = (e) => {
        setData({
            ...data,
            password: e.target.value,
        });
    };
    return (
        <div className="login">
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-element">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => handleEmail(e)}
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        onChange={(e) => handlePassword(e)}
                    />
                </div>
                <div className="login-form-footer">
                    <button type="submit" className="btn btn-primary">
                        Log in !
                    </button>
                    <div className="form-footer-split"></div>
                    <Link to="/register" className="form-link">
                        Create my account
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
