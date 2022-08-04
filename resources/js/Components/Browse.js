import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import addClicksToArticle from "./SubComponents/AddClicksToArticle";
import AddToFavorite from "./SubComponents/AddToFavorite";
function Browse({ user }) {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios
            .get("http://supotsu.test/api/articles")
            .then((res) => setArticles(res.data));
    }, []);
    return (
        <div className="browse">
            <div className="browse-container">
                {articles.map((article) => {
                    return (
                        <div className="browse-article" key={article.id}>
                            <img src={`./assets/img/${article.path}.jpg`} />
                            <div className="browse-article-info">
                                <div>
                                    <Link
                                        to={`/articles/${article.id}`}
                                        onClick={() =>
                                            addClicksToArticle(article.id)
                                        }
                                    >
                                        <h2>{article.title}</h2>
                                        <p className="article-content">
                                            {article.content.length > 150
                                                ? `${article.content.slice(
                                                      0,
                                                      149
                                                  )}... Click to read more !`
                                                : article.content}
                                        </p>
                                    </Link>
                                </div>
                                <div className="browse-article-footer">
                                    <a>{article.created_at.slice(0, 10)}</a>
                                    <p className="article-category">
                                        {article.category.toLowerCase()}
                                    </p>
                                    <img
                                        className="fav-img"
                                        alt="fav-img"
                                        src="./assets/img/heart.svg"
                                        onClick={() =>
                                            AddToFavorite(article.id, user)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Browse;
