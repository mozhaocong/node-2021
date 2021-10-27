var mysql = require('mysql')
// import { createWriteStream } from '../public/fs'
// node
console.log(global.name)
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'aA123456789',
  database: 'mzctest'
})
connection.connect()

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
  if (error) {
    console.log(error)
    return
  }
  console.log('The solution is: ', results[0].solution)
})

connection.query('SELECT * FROM websites', function(error, results, fields) {
  if (error) {
    console.log(error)
    return
  }
  console.log('SELECT ', results)
})
connection.end()
