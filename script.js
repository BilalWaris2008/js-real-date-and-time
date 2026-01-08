
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

    // let timeAM = "AM"
    // let timePM = "PM"
    let hour = now.getHours()
    let hours = now.getHours() % 12
    let min = now.getMinutes()
    let sec = now.getSeconds()

    document.getElementById("showtime").innerHTML = `${hours}:${min}:${sec}`

    // if (hour >= 12) {
    //     document.getElementById("timeAMPM").innerHTML = `${timePM}`
    // }
    // else {
    //     document.getElementById("timeAMPM").innerHTML = `${timeAM}`
    // }
}
showDateTime()

setInterval(showDateTime, 1000)




