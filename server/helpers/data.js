const fs = require('fs')

const dataPath = './data/db.json'
const db = {};

fs.readFile(dataPath, 'utf-8', (err, data) => {
  if (err) {
    throw err
  }
  const parsed = JSON.parse(data)
  Object.assign(db, parsed)
})

const updateDB = (json) => {
  fs.writeFile(dataPath, json, 'utf8', (err, data) => {
    if (err) {
      throw err
    }
  })
}
module.exports = {
  db,
  updateDB
}
