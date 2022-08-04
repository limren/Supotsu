import React from "react";
import AddToFavorite from "./AddToFavorite";
function SearchedArticles({ searchedArticles, searchedCategory, user }) {
    return (
        <div className="searched-category">
            <div className="container-category">
                <h2>Results for : {searchedCategory}</h2>
                <div className="category">
                    {searchedArticles.map((searchedArticle) => {
                        return (
                            <div
                                key={searchedArticle.id}
                                className="category-main-article"
                            >
                                <img
                                    className="category-image"
                                    src={`./assets/img/${searchedArticle.path}.jpg`}
                                />
                                <h3>{searchedArticle.title}</h3>
                                <div className="category-article-footer">
                                    <p>
                                        Posted the{" "}
                                        {searchedArticle.created_at.slice(
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
                                                searchedArticle.id,
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
}

export default SearchedArticles;
