import React from "react";
import PopularNews from "../Components/PopularNews";
import RecentNews from "../Components/RecentNews";

function Home() {
    return (
        <div className="home">
            <div className="news-nav">
                <RecentNews />
                <PopularNews />
            </div>
        </div>
    );
}

export default Home;
