import React, { useState, useEffect } from "react";
import axios from "axios";

function Category() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="category">
            <div className="category-search">
                <form onSubmit={(e) => handleSubmit(e)} role="search">
                    <label for="search">Search for stuff</label>
                    <input
                        id="search"
                        type="search"
                        placeholder="Search a category..."
                        autofocus
                        required
                    />
                    <button type="submit">Go</button>
                </form>
            </div>
            <div className="category-main-categories"></div>
        </div>
    );
}

export default Category;
