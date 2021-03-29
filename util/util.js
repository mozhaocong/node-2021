function sleep(a) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, a)
  })
}

const data = '3213'
module.exports = {
  sleep,
  data
}
