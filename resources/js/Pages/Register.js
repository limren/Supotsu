import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleName = (e) => {
        setData({
            ...data,
            name: e.target.value,
        });
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
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios
                .post("http://supotsu.test/api/register", data)
                .then((res) => console.log(res));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="register">
            <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-element register-el">
                    <label className="form-label" htmlFor="name">
                        Your Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your (user)name"
                        id="name"
                        className="form-control"
                        onChange={(e) => handleName(e)}
                    />
                </div>
                <div className="form-element register-el">
                    <label className="form-label" htmlFor="email">
                        Your Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email adress"
                        id="email"
                        className="form-control"
                        onChange={(e) => handleEmail(e)}
                    />
                </div>

                <div className="form-element register-el">
                    <label className="form-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        id="password"
                        className="form-control"
                        onChange={(e) => handlePassword(e)}
                    />
                </div>

                <div className="register-form-footer">
                    <button type="submit" className="btn btn-primary">
                        Register !
                    </button>
                    <div className="form-footer-split"></div>
                    <Link to="/login" className="form-link">
                        Log in
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
if (document.getElementById("register")) {
    ReactDOM.createRoot(document.getElementById("register")).render(
        <Register />
    );
}
