let time=document.getElementById("time");



function digitalClock(){
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes()
    let second=date.getSeconds();
  if(hour>12){
    hour=hour-12;
  }
   if(minute<10){
    minute="0"+minute;
   }
    if(second<10){
        second="0"+second;
    }
    if(hour<10)
    {
        hour="0"+hour;
    }
    // console.log(hour);
   let period="AM" 
 if(hour<12){
  period="PM"    
 }
    time.textContent= hour + ":"+ minute + ":" + second + " "+period;
}
setInterval(digitalClock,1000)