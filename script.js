var clock;

function Clock(){
    Time();
    backgroundColor();
}

function Time(){
    var date = new Date();
    var hours;
var minutes;
var seconds;

    if(date.getHours() < 10){
        hours = "0" + date.getHours();
    }else {
        hours = date.getHours();
    }

    if(date.getMinutes() < 10){
        minutes = "0" + date.getMinutes();
    }else {
        minutes = date.getMinutes();
    }

    if(date.getSeconds() < 10){
        seconds = "0" + date.getSeconds();
    }else {
        seconds = date.getSeconds();
    }   
    
    clock = "#" + hours + minutes + seconds
    document.getElementById('time').innerHTML = clock;
}

function backgroundColor(){
    document.body.style.backgroundColor = clock;
}

Clock();
setInterval(Clock, 1000);