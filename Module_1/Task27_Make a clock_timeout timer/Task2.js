function clock() {
  function getCurrentTime() {
    const currentTime = new Date();

    const hours = currentTime.getHours().toString().padStart(2, '0')
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    const seconds = currentTime.getSeconds().toString().padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  function logTime() {
    console.log(getCurrentTime())
  }

  setInterval(logTime, 1000)

}

clock();