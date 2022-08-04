import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Profile({ user }) {
    const [articles, setArticles] = useState([]);
    const [articlesLikedLength, setArticlesLikedLength] = useState(0);
    useEffect(() => {
        axios
            .get(`http://supotsu.test/api/favorites/articles/${user.id}`)
            .then((res) => {
                setArticles(res.data);
            });
    }, []);
    useEffect(() => {
        setArticlesLikedLength(articles.length);
    }, [articles]);
    return (
        <div className="browse">
            <h2>{user.name} profile </h2>
            <div className="browse-container">
                <h3>You liked {articlesLikedLength} articles : </h3>
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

export default Profile;
