import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const AddToFavorite = (articeId, user) => {
    if (!user) {
        alert("You're not logged in !");
    } else {
        const data = { user_id: user.id, article_id: articeId };
        axios
            .post("http://supotsu.test/api/favorites", data)
            .then((res) => console.log(res.data));
    }
};

export default AddToFavorite;
