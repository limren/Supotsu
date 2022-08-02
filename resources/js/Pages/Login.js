import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8" id="login">
                    <form
                        className="login-form"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(e) => handleEmail(e)}
                            />
                            <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => handlePassword(e)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

// if (document.getElementById("login")) {
//     ReactDOM.createRoot(document.getElementById("login")).render(<Login />);
// }
