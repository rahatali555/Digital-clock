function updateClock() {
  const now = new Date();
  let hour= now.getHours();
  let minute= now.getMinutes();
  let second = now.getSeconds();
 let ampm= now.getHours()>=12?'pm':'am'
  if(second < 10){
    second ="0" + second
  }
    if(minute < 10){
    minute ="0" + minute
  }
  hour=hour%12
   if(hour ===0){
    hour =12
  }
  document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second+ " "+ ampm;
}
updateClock();
const interval = setInterval(updateClock,1000);