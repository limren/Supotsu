import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
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
        <form className="mx-1 mx-md-4" onSubmit={(e) => handleSubmit(e)}>
            <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                    <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        onChange={(e) => handleName(e)}
                    />
                    <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                    </label>
                </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                    <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        onChange={(e) => handleEmail(e)}
                    />
                    <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                    </label>
                </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                    <input
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                        onChange={(e) => handlePassword(e)}
                    />
                    <label className="form-label" htmlFor="form3Example4c">
                        Password
                    </label>
                </div>
            </div>
            {/* 
            <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                    <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                    </label>
                </div>
            </div> */}

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" className="btn btn-primary btn-lg">
                    Register
                </button>
            </div>
        </form>
    );
}

export default Register;
if (document.getElementById("register")) {
    ReactDOM.createRoot(document.getElementById("register")).render(
        <Register />
    );
}
