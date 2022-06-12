const data = require('../helpers/data')
const usersRoute = require('./users')
const articlesRoute = require('./articles')

const appRouter = (app) => {
  const db = data.db

  usersRoute(app, db)
  articlesRoute(app, db)
}

module.exports = appRouter
