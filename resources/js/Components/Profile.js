import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Profile({ user }) {
    const [articlesUser, setArticlesUser] = useState([]);
    useEffect(() => {
        axios
            .get(`http://supotsu.test/api/favorites/articles/${user.id}`)
            .then((res) => setArticlesUser(res.data));
    }, []);
    return (
        <div>
            <div>
                <h2>Profile : {user.name}</h2>
            </div>
            <ul>
                {articlesUser.map((article) => {
                    return (
                        <Link key={article.id} to={`/article/${article.id}`}>
                            <li></li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default Profile;
