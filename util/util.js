async function sleep(a) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('延时30000')
      resolve()
    }, a)
  })
}

module.exports = {
  sleep
}
