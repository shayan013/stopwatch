let seconds=0;
let min=0;
let hour=0;
let display=document.getElementById('time')

let sec_leading=0;
let min_leading=0;
let hour_leading=0;
let val=null;
function start(){

seconds++;
if(seconds>59){
    min++;
    seconds=0;

    if(min>59){
        hour++;
        min=0;
    }
}

if(seconds<10){
  sec_leading="0"+ seconds.toString();
}
else{
    sec_leading=seconds;
}
if(min<10){
    min_leading="0"+ min.toString()
}
else{
    min_leading=min
}
if(hour<10){
    hour_leading="0"+ hour.toString();

}
else{
     hour_leading=hour;
}
display.innerHTML=hour_leading+':'+min_leading+':'+sec_leading;


}

function startbtn(){
val=setInterval(start,1000);}

function reset(){
seconds=0;
hour=0;
min=0;
window.clearInterval(val);
    display.innerHTML='00:00:00';



}