let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.min');
let second = document.querySelector('.sec');
let millisecond = document.querySelector('.milli');

function inter(){
const date = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let dayName= date.getDay();
day.innerText=days[dayName];
hour.innerText = date.getHours();
minute.innerText=date.getMinutes();
second.innerText = date.getSeconds();
millisecond.innerText = date.getMilliseconds();
}
setInterval(inter,10)


