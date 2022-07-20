import React from "react";

function SearchedArticles({ searchedArticles, searchedCategory }) {
    return (
        <div className="searched-category">
            <div className="container-category">
                <h2>Results for : {searchedCategory}</h2>
                <div className="category">
                    {searchedArticles.map((searchedArticle) => {
                        return (
                            <div
                                key={searchedArticle.id}
                                className="category-article"
                            >
                                <img
                                    src={`./assets/img/${searchedArticle.path}.jpg`}
                                />
                                <h3>{searchedArticle.title}</h3>
                                <p>
                                    Posted the{" "}
                                    {searchedArticle.created_at.slice(0, 10)}
                                </p>
                                <img
                                    className="fav-img"
                                    alt="fav-img"
                                    src="./assets/img/heart.svg"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SearchedArticles;
