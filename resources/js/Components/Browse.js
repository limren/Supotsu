import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Browse() {
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
                        <Link key={article.id} to={`/articles/${article.id}`}>
                            <div className="browse-article">
                                <img src={`./assets/img/${article.path}.jpg`} />
                                <div className="browse-article-info">
                                    <div>
                                        <h2>{article.title}</h2>
                                        <p className="article-content">
                                            {article.content.length > 150
                                                ? `${article.content.slice(
                                                      0,
                                                      149
                                                  )}... Click to read more !`
                                                : article.content}
                                        </p>
                                    </div>
                                    <a>{article.created_at.slice(0, 10)}</a>
                                    <p className="article-category">
                                        {article.category.toLowerCase()}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Browse;
