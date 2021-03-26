var keypress = require('keypress')

keypress(process.stdin)
const kepresss = {
  fun: function() {
    process.stdin.on('keypress', (ch, key) => {
      this.kepresss(key)
      if (key && key.ctrl && key.name === 'c') {
        process.stdin.pause()
      }
    })
    process.stdin.setRawMode(true)
    process.stdin.resume()
  },
  kepresss: function(data) {
  }
}
module.exports = kepresss
