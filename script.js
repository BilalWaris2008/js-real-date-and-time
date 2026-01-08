
function showDateTime() {

    let now = new Date()
    // console.log(now);

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    let dayName = days[now.getDay()]
    // console.log(dayName);

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    let monName = months[now.getMonth()]
    // console.log(monName);

    let currentDate = now.getDate()
    let currentYear = now.getFullYear()

    document.getElementById("showdate").innerHTML = `${currentDate} ${monName} ${dayName} ${currentYear}`

    let hours = now.getHours() % 12

    let min = now.getMinutes()
    let sec = now.getSeconds()

    document.getElementById("showtime").innerHTML = `${hours}:${min}:${sec}`
}
showDateTime()

setInterval(showDateTime, 1000)




