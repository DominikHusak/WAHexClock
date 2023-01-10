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

    document.getElementById('time').innerHTML = "#" + hours + minutes + seconds;
    document.body.style.backgroundColor = "#" + hours + minutes + seconds;
}

setInterval(Time, 10);