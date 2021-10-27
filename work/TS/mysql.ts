const mysql = require('mysql')

class Mysql {
  connection : any
  constructor() {
     this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'aA123456789',
      database: 'mzctest'
    })
  }

  init() {
    this.connection.connect()
    this.connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
      if (error) {
        console.log(error)
        return
      }
      console.log('The solution is: ', results[0].solution)
    })
    this.connection.query('SELECT * FROM websites', function(error, results, fields) {
      if (error) {
        console.log(error)
        return
      }
      console.log('SELECT ', results)
    })
    this.connection.end()
  }
}

const mySqlInit = function() {
  const mysqlData = new Mysql()
  mysqlData.init()
  return mysqlData
}

export {
  mySqlInit
}
