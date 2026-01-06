
function showDateTime() {

    let now = new Date()
    console.log(now);

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    let dayName = days[now.getDay()]
    console.log(dayName);

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    let monName = months[now.getMonth()]
    console.log(monName);

    let currentDate = now.getDate()
    console.log(currentDate);

    let currentYear = now.getFullYear()
    console.log(currentYear);


    document.getElementById("showdate").innerHTML = `${currentDate} ${monName} ${dayName} ${currentYear}`

}

showDateTime()




