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

    hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();

    minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    
    clock = "#" + hours + minutes + seconds
    document.getElementById('time').innerHTML = clock;
}

function backgroundColor(){
    document.body.style.backgroundColor = clock;
}

Clock();
setInterval(Clock, 1000);