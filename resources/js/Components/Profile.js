import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Profile({ user }) {
    const [articlesUser, setArticlesUser] = useState([]);
    useEffect(() => {
        axios
            .get(`http://supotsu.test/api/favorites/articles/${user.id}`)
            .then((res) => {
                console.log(res);
                setArticlesUser(res.data);
            });
        // console.log(user);
    }, []);
    return (
        <div>
            <div>
                <h2>Profile</h2>
            </div>
            <ul>
                {articlesUser.map((article) => {
                    return (
                        <Link key={article.id} to={`/article/${article.id}`}>
                            <li>{article.title}</li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default Profile;
