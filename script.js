function Time(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    document.getElementById('time').innerHTML = "#" + hours + minutes + seconds;
}

setInterval(Time, 10);