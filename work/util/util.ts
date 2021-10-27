async function sleep(a) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, a)
  })

}

class utilClass {
    sleep: (number) =>  Promise<void> = sleep
}

export {
  utilClass,
  sleep
}
