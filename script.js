function updateclock() {
    const clockElement = document.getElementById("clock")
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()
    let mm = a.getMonth()
    let y = a.getFullYear()
    let timestring = `${h}:${m}:${s}`
    let datestring = `Date:${d}:${mm}:${y}`
    clockElement.textContent = `${timestring} | ${datestring}`
  }
  setInterval(updateclock, 1000);
  
  updateclock();
  
  
  