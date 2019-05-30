const second= document.querySelector('.second-hand');
const minute= document.querySelector('.minute-hand');
const hour= document.querySelector('.hour-hand');
console.log('hlo');
const now= new Date();
const sectime= now.getSeconds();
var secdegree= sectime*6+90;
const mintime= now.getMinutes();
var mindegree= mintime*6+90;
const hrtime= now.getHours();
var hrdegree= hrtime*6+90;
setInterval(function(){
    secdegree=secdegree+6;
    mindegree=mindegree+6/60;
    hrdegree=hrdegree+6/3600;
    second.style.transform= `rotate(${secdegree}deg)`;
    minute.style.transform= `rotate(${mindegree}deg)`;
    hour.style.transform= `rotate(${hrdegree}deg)`;
},1000);


