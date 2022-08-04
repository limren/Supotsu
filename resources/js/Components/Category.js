import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchedArticles from "./SubComponents/SearchedArticles";
import AddToFavorite from "./SubComponents/AddToFavorite";
import { Link } from "react-router-dom";
import addClicksToArticle from "./SubComponents/AddClicksToArticle";

function Category({ user }) {
    const [footballArticles, setFootballArticles] = useState([]);
    const [basketballArticles, setBasketballArticles] = useState([]);
    const [courseArticles, setCourseArticles] = useState([]);
    const [searchedArticles, setSearchedArticles] = useState([]);
    const [inputValue, setInputValue] = useState();
    const [searched, setSearched] = useState(false);
    const [searchedCategory, setSearchedCategory] = useState("");
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
        setSearchedCategory(inputValue);
        // No need to check if the input value is empty since the "required" attribute is given to the HTML input
        axios
            .get(`http://supotsu.test/api/articles/category/${inputValue}`)
            .then((res) => setSearchedArticles(res.data));
        setSearched(true);
    };
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const MainCategories = ({ user }) => {
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
                                    <Link
                                        to={`/articles/${footballArticle.id}`}
                                        onClick={() =>
                                            addClicksToArticle(
                                                footballArticle.id
                                            )
                                        }
                                    >
                                        <img
                                            className="category-image"
                                            src={`./assets/img/${footballArticle.path}.jpg`}
                                        />
                                        <h3>
                                            {footballArticle.title.length > 40
                                                ? `${footballArticle.title.slice(
                                                      0,
                                                      50
                                                  )}...`
                                                : footballArticle.title}
                                        </h3>
                                    </Link>
                                    <div className="category-article-footer">
                                        <p>
                                            Posted the{" "}
                                            {footballArticle.created_at.slice(
                                                0,
                                                10
                                            )}
                                        </p>
                                        <img
                                            className="fav-img"
                                            alt="fav-img"
                                            src="./assets/img/heart.svg"
                                            onClick={() =>
                                                AddToFavorite(
                                                    footballArticle.id,
                                                    user
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="container-category">
                    <h2>Basketball</h2>
                    <div className="category">
                        {basketballArticles.map((basketballArticle) => {
                            return (
                                <div
                                    key={basketballArticle.id}
                                    className="category-main-article"
                                >
                                    <Link
                                        to={`/articles/${basketballArticle.id}`}
                                        onClick={() =>
                                            addClicksToArticle(
                                                basketballArticle.id
                                            )
                                        }
                                    >
                                        <img
                                            className="category-image"
                                            src={`./assets/img/${basketballArticle.path}.jpg`}
                                        />
                                        <h3>
                                            {basketballArticle.title.length > 40
                                                ? `${basketballArticle.title.slice(
                                                      0,
                                                      50
                                                  )}...`
                                                : basketballArticle.title}
                                        </h3>
                                    </Link>
                                    <div className="category-article-footer">
                                        <p>
                                            Posted the{" "}
                                            {basketballArticle.created_at.slice(
                                                0,
                                                10
                                            )}
                                        </p>
                                        <img
                                            className="fav-img"
                                            alt="fav-img"
                                            src="./assets/img/heart.svg"
                                            onClick={() =>
                                                AddToFavorite(
                                                    basketballArticle.id,
                                                    user
                                                )
                                            }
                                        />
                                    </div>
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
                                    {" "}
                                    <Link
                                        to={`/articles/${courseArticle.id}`}
                                        onClick={() =>
                                            addClicksToArticle(news.id)
                                        }
                                    >
                                        <img
                                            className="category-image"
                                            src={`./assets/img/${courseArticle.path}.jpg`}
                                        />
                                        <h3>
                                            {courseArticle.title.length > 40
                                                ? `${courseArticle.title.slice(
                                                      0,
                                                      50
                                                  )}...`
                                                : courseArticle.title}
                                        </h3>
                                    </Link>
                                    <div className="category-article-footer">
                                        <p>
                                            Posted the{" "}
                                            {courseArticle.created_at.slice(
                                                0,
                                                10
                                            )}
                                        </p>
                                        <img
                                            className="fav-img"
                                            alt="fav-img"
                                            src="./assets/img/heart.svg"
                                            onClick={() =>
                                                AddToFavorite(
                                                    courseArticle.id,
                                                    user
                                                )
                                            }
                                        />
                                    </div>
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
                <div className="category-button-section">
                    <h2>Search for a category : </h2>
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        className="category-search-form"
                    >
                        <input
                            id="search"
                            type="search"
                            onChange={(e) => handleInput(e)}
                            placeholder="Enter a category..."
                            autoFocus
                            required
                        />
                        <button type="submit" className="submit-category">
                            Search
                        </button>
                    </form>
                </div>
                {searched ? (
                    <SearchedArticles
                        searchedArticles={searchedArticles}
                        searchedCategory={searchedCategory}
                        user={user}
                    />
                ) : (
                    <MainCategories user={user} />
                )}
            </div>
        </div>
    );
}

export default Category;
