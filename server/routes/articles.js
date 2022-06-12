const articlesModule = require('../helpers/articles')

const articlesRoute = (app, db) => {
  app.get('/articles', (req, res) => {
    const result = articlesModule.getArticles(db)
    res.send(result)
  })

  app.post('/articles', (req, res) => {
    const result = articlesModule.addArticle(db, req.body)
    res.send(result)
  })

  app.get('/articles/:id', (req, res) => {
    const articleId = req.params['id'];
    const result = articlesModule.getArticleById(db, articleId)
    res.send(result)
  })
}

module.exports = articlesRoute
