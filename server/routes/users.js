const usersModule = require('../helpers/users')

const usersRoute = (app, db) => {
  app.get('/users', (req, res) => {
    let result = usersModule.getUsers(db)
    res.send(result)
  })

  app.get('/users/:id', (req, res) => {
    const userId = req.params['id'];
    let result = usersModule.getUserById(db, userId)
    res.send(result)
  })
}

module.exports = usersRoute
