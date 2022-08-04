import axios from "axios";

const addClicksToArticle = (articleId) => {
    axios.put(`http://supotsu.test/api/clicks/${articleId}`);
};

export default addClicksToArticle;
