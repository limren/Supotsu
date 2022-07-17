import React, { useEffect, useState } from "react";
import axios from "axios";
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
                        <li>
                            <div className="recent-news-body">
                                <div className="recent-news-text">
                                    <h2>Latest article</h2>
                                    <h3>{news.title}</h3>
                                    <p>{news.content}</p>
                                </div>
                                <div className="recent-news-img">
                                    <img
                                        src={`./assets/img/${news.path}.jpg`}
                                        alt="recent news image"
                                    />
                                    <div>
                                        <p>CONTINUE READING</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default RecentNews;
