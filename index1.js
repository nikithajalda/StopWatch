var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var hh = 0;
var mm = 0;
var ss = 0;
var id ;
function startTimer() {
   id =  setInterval(startStopWatch, 1000);
}

function startStopWatch(){
    if(ss == 59){
        if(mm == 59){
            hh++;
            mm = 0;
            ss = 0;
        }else{
            mm++;
            ss = 0;
        }
    }else{
        ss++
    }
    hours.innerHTML =(hh <10) ? "0"+hh:hh;
    minutes.innerHTML=(mm <10) ?"0"+mm:mm;
    seconds.innerHTML = (ss <10)?"0"+ss:ss;
}
function stopTimer(){
    clearInterval(id);
}
function clearTimer(){
    hh= 0;
    mm= 0;
    ss = 0;
    hours.innerHTML =(hh <10)?"0"+hh:hh;
    minutes.innerHTML=(mm <10)?"0"+mm:mm;
    seconds.innerHTML =(ss <10)?"0"+ss:ss;
}
