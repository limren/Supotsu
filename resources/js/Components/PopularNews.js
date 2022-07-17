import axios from "axios";
import React, { useEffect, useState } from "react";

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
                        <li key={news.id}>
                            <h3>{news.title}</h3>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default PopularNews;
