const getUserById = (db, id) => {
  const res = db["users"].filter((user) => user.id === id)
  return res
}

const getUsers = (db) => {
  const users = db["users"]
  return users
}

module.exports = {
  getUserById,
  getUsers
}
