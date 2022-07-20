import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Article() {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios
            .get(`http://supotsu.test/api/articles/${id}`)
            .then((res) => setArticle(res.data));
    }, []);
    let { id } = useParams();
    return (
        <div className="article">
            <div className="article-images">
                <img
                    src={`../assets/img/${article.path}.jpg`}
                    alt="Image related to the article topic"
                />
                <img
                    className="fav-img"
                    alt="fav-img"
                    src="./assets/img/heart.svg"
                />
            </div>
            <div>
                <h2>{article.title}</h2>
                <p className="article-content">{article.content}</p>
                <p className="article-info">
                    Posted the{" "}
                    {article.created_at ? article.created_at.slice(0, 10) : ""}.
                </p>
            </div>
        </div>
    );
}

export default Article;
