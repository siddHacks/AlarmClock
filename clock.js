const display=document.getElementById(`clock`);
const audio= new Audio(`https://sfxcontent.s3.amazonaws.com/soundfx/SubmarineDive.mp3`);
audio.loop=true;
let alarmTime=null;
let alarmTimeout=null;

function updateTime() {
    const date=new Date();
    const hours=formatTime(date.getHours());
    const minutes=formatTime(date.getMinutes());
    const seconds=formatTime(date.getSeconds());

    display.innerText=`${hours} :: ${minutes} :: ${seconds}`

}

function formatTime(time){
    if(time<10){
        return '0'+time;
    }
    return time;
}
function setAlarmTime(value){
    alarmTime= value;
   
}
function setAlarm(){
    if(alarmTime){
    const current=new Date();
    const TimetoAlarm =new Date(alarmTime);

    if(TimetoAlarm > current){
        const timeout=TimetoAlarm.getTime()-current.getTime();
        alarmTimeout =setTimeout(() => audio.play(), timeout);
        alert(`Alarm set`)
    }
   }
}
function clearAlarm(){
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert(`Alarm cleared`);
    }
}




setInterval(updateTime,1000);

