import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import addClicksToArticle from "./SubComponents/AddClicksToArticle";
function RecentNews() {
    const [recentNews, setRecentNews] = useState([]);
    useEffect(() => {
        axios
            .get("http://supotsu.test/api/articles/mostrecent")
            .then((res) => setRecentNews(res.data));
    }, []);
    return (
        <div className="recent-news">
            <ul>
                {recentNews.map((news) => {
                    return (
                        <Link
                            key={news.id}
                            to={`/articles/${news.id}`}
                            onClick={() => addClicksToArticle(news.id)}
                        >
                            <li>
                                <div className="recent-news-body">
                                    <div className="recent-news-text">
                                        <h2>LATEST ARTICLE</h2>
                                        <h3>{news.title}</h3>
                                        <p>
                                            {news.content
                                                ? `${news.content.slice(
                                                      0,
                                                      150
                                                  )}...`
                                                : ""}
                                        </p>
                                    </div>
                                    <div className="recent-news-img">
                                        <img
                                            src={`./assets/img/${news.path}.jpg`}
                                            alt="recent news image"
                                        />
                                        <div className="img-nav">
                                            <p>CONTINUE READING</p>
                                            <img src="./assets/img/arrow.svg" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default RecentNews;
