function time() {
    var today =   new Date();
    var years =   today.getFullYear();
    var month =   today.getMonth();
    var date =    today.getDate();
    var days =    today.getDay();
    var hours =   today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    
    var dayWeek = ["Sunday", "Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    document.getElementById('txt').innerHTML = hours + ":" + minutes +':' + seconds + ' ' + dayWeek[days] + ' ' + date + ' ' + months[month] + ' ' + years;
  
    var t = setTimeout(time, 500);
}
 function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

