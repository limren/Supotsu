import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const AddToFavorite = (articleId, user) => {
    console.log(articleId);
    if (!user) {
        alert("You're not logged in !");
    } else {
        const data = { user_id: user.id, article_id: articleId };
        axios
            .post("http://supotsu.test/api/favorites", data)
            .then((res) => console.log(res.data));
    }
};

export default AddToFavorite;
