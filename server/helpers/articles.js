const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const data = require('../helpers/data')

const getArticleById = (db, id) => {
    const res = db["articles"].filter((article) => article.id === id)
    return res
}

const addArticle = (db, article) => {
    const articles = getArticles(db)
    article.id = uuidv4();
    articles.push(article);
    var json = JSON.stringify(db);
    const result = data.updateDB(json);
    return result;
}

const getArticles = (db) => {
    const articles = db["articles"]
    return articles
}

module.exports = {
    getArticleById,
    getArticles,
    addArticle
}
