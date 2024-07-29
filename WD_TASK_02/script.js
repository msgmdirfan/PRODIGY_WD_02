let timer;
let startTimer;
let laps=[];
let lapscontainer=document.getElementById('laps');

function startstop(){

    if(!timer){
         startTimer=new Date().getTime();
        timer=setInterval(update,1000);
        document.getElementById('laps').innerHTML='';
        laps=[];
    }
    
}
function pause(){
    clearInterval(timer);
    timer=null;
}
function reset(){
    clearInterval(timer);
    timer=null;
    document.getElementById('display').textContent = '00:00:00';
    lapscontainer.innerHTML='';
    laps=[];
}
function lap() {
    if (timer) {
        let times = calculateElapsed();
        laps.push(times);
        let lapTimes = document.createElement('li');
        lapTimes.textContent = times;
        lapscontainer.appendChild(lapTimes);
    }
}

function update(){
    let elapsed = calculateElapsed();  
    document.getElementById('display').textContent = elapsed;
}
function calculateElapsed(){
    let currentTime = new Date().getTime();
    let elapsed=currentTime-startTimer;
    let hours=Math.floor(elapsed/(1000*60*60));
    let minutes=Math.floor(elapsed%(1000*60*60)/(1000*60));
    let seconds=Math.floor(elapsed%(1000*60*60)/(1000));
    return formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
