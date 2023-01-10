function Time(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if(10 >= hours){
        hours = "0" + hours;
    }

    if(10 >= minutes){
        minutes = "0" + minutes;
    }

    if(10 >= seconds){
        seconds = "0" + seconds;
    }

    var clock = "#" + hours + minutes + seconds;
    document.getElementById('time').innerHTML = clock;
    document.body.style.backgroundColor = clock;
}

setInterval(Time, 1000);