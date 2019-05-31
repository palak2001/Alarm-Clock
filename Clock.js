const second= document.querySelector('.second-hand');
const minute= document.querySelector('.minute-hand');
const hour= document.querySelector('.hour-hand');
const alarmsec= document.querySelector('.alarmsec');
const alarmmin= document.querySelector('.alarmmin');
const alarmhr= document.querySelector('.alarmhr');
console.log('hey,I m palak');
const now= new Date();
const sectime= now.getSeconds();
var secdegree= sectime*6+90;
const mintime= now.getMinutes();
var mindegree= mintime*6+90;
const hrtime= now.getHours();
console.log(hrtime);
var hrdegree= hrtime*30+90;
setInterval(function(){
    secdegree=secdegree+6;
    mindegree=mindegree+6/60;
    hrdegree=hrdegree+1/120;
    second.style.transform= `rotate(${secdegree}deg)`;
    minute.style.transform= `rotate(${mindegree}deg)`;
    hour.style.transform= `rotate(${hrdegree}deg)`;
    if(secdegree==alarmsec*6&&mindegree==alarmmin*6&&hrdegree==alarmhr*30)
    {
        const audio= new Audio('alarm.mp3');
        audio.play();
    }
},1000);
