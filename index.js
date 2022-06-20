const dayse1 = document.getElementById('days');
const hourse1 = document.getElementById('hours');
const minse1 =  document.getElementById('mins');
const secondse1 = document.getElementById('seconds');

const newyear= '1 Jan 2023';

function countdown(){
    const newyeardate = new Date(newyear);
    const currentdate = new Date();

    const totalseconds = new Date(newyeardate-currentdate)/1000;

    const days = Math.floor(totalseconds/86400);
    const hours = Math.floor(totalseconds/3600) %24;
    const mins = Math.floor(totalseconds/60)% 60;
    const secs = Math.floor(totalseconds)%60;

   dayse1.innerHTML= days;
   hourse1.innerHTML= formattime(hours);
   minse1.innerHTML= formattime(mins);
   secondse1.innerHTML= formattime(secs);
   
   
}

function formattime(time){

    return time<10 ? `0${time}` : time;


}

countdown()

setInterval(countdown, 1000);