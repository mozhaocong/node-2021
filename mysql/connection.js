var mysql = require('mysql')
import data from '../public/fs'
console.log(data)
// import { createWriteStream } from '../public/fs'
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
  // createWriteStream(JSON.stringify(results))
  console.log('SELECT ', typeof results)
})

connection.end()
