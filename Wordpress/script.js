function theTime() {
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var dayName = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var time = new Date();
    var minutes = time.getMinutes();
    var hours = time.getHours();
    var seconds = time.getSeconds();
    seconds = checkTime(seconds);
    minutes = checkTime(minutes);

    var m = time.getMonth();
    var month = monthName[m];
    var year = time.getFullYear();
    var d = time.getDay();
    var day = dayName[d];
    var date = time.getDate();
    const fullDate = day + ' ' + month + ' ' + date + ', ' + year;
    const fullTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById('date').innerHTML = fullDate;
    document.getElementById('time').innerHTML = fullTime;

}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
};

// function checkDay(i) {
//     if (i = 1) { i = i + "st"};
//     if (i = 2) { i = i + "nd"};
//     if (i = 3) { i = i + "rd"}
// }

setInterval(theTime, 1000);



// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
//     // var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//     if (i < 10) { i = "0" + i };
//     return i;
// }






