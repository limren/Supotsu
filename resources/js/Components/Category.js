import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchedArticles from "./SubComponents/SearchedArticles";

function Category() {
    const [footballArticles, setFootballArticles] = useState([]);
    const [basketballArticles, setBasketballArticles] = useState([]);
    const [courseArticles, setCourseArticles] = useState([]);
    const [searchedArticles, setSearchedArticles] = useState([]);
    const [inputValue, setInputValue] = useState();
    const [searched, setSearched] = useState(false);
    useEffect(() => {
        axios
            .get("http://supotsu.test/api/articles/category/football")
            .then((res) => setFootballArticles(res.data));
        axios
            .get("http://supotsu.test/api/articles/category/basketball")
            .then((res) => setBasketballArticles(res.data));
        axios
            .get("http://supotsu.test/api/articles/category/course")
            .then((res) => setCourseArticles(res.data));
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        // No need to check if the input value is empty since the "required" attribute is given to the HTML input
        axios
            .get(`http://supotsu.test/api/articles/category/${inputValue}`)
            .then((res) => setSearchedArticles(res.data));
        setSearched(true);
    };
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const MainCategories = () => {
        return (
            <div className="category-main-categories">
                <div className="container-category">
                    <h2>Football</h2>
                    <div className="category">
                        {footballArticles.map((footballArticle) => {
                            return (
                                <div
                                    key={footballArticle.id}
                                    className="category-main-article"
                                >
                                    <img
                                        src={`./assets/img/${footballArticle.path}.jpg`}
                                    />
                                    <h3>{footballArticle.title}</h3>
                                    <p>
                                        Posted the{" "}
                                        {footballArticle.created_at.slice(
                                            0,
                                            10
                                        )}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="container-category">
                    <h2>basketball</h2>
                    <div className="category">
                        {basketballArticles.map((basketballArticle) => {
                            return (
                                <div
                                    key={basketballArticle.id}
                                    className="category-main-article"
                                >
                                    <img
                                        src={`./assets/img/${basketballArticle.path}.jpg`}
                                    />
                                    <h3>{basketballArticle.title}</h3>
                                    <p>
                                        Posted the{" "}
                                        {basketballArticle.created_at.slice(
                                            0,
                                            10
                                        )}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="container-category">
                    <h2>Course</h2>
                    <div className="category">
                        {courseArticles.map((courseArticle) => {
                            return (
                                <div
                                    key={courseArticle.id}
                                    className="category-main-article"
                                >
                                    <img
                                        src={`./assets/img/${courseArticle.path}.jpg`}
                                    />
                                    <h3>{courseArticle.title}</h3>
                                    <p>
                                        Posted the{" "}
                                        {courseArticle.created_at.slice(0, 10)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="category-component">
            <div className="category-search">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="search">Search for stuff</label>

                    <input
                        id="search"
                        type="search"
                        onChange={(e) => handleInput(e)}
                        placeholder="Search a category..."
                        autoFocus
                        required
                    />
                    <button type="submit">Go</button>
                </form>
                {searched ? (
                    <SearchedArticles
                        searchedArticles={searchedArticles}
                        inputValue={inputValue}
                    />
                ) : (
                    <MainCategories />
                )}
            </div>
        </div>
    );
}

export default Category;
