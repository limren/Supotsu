import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addClicksToArticle from "./SubComponents/AddClicksToArticle";
function PopularNews() {
    const [popularNews, setPopularNews] = useState([]);
    useEffect(() => {
        axios
            .get("http://supotsu.test/api/articles/mostclicked")
            .then((res) => setPopularNews(res.data));
    }, []);

    return (
        <div className="popular-news">
            <h2>POPULAR NEWS</h2>
            <ul>
                {popularNews.map((news) => {
                    return (
                        <Link
                            to={`/articles/${news.id}`}
                            key={news.id}
                            onClick={() => addClicksToArticle(news.id)}
                        >
                            <li className="news">
                                <h3>{news.title}</h3>
                                <img src="./assets/img/arrow-white.svg" />
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default PopularNews;
