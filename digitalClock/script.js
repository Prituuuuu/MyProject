var msg = document.getElementById('msg');
var clock = document.getElementById('clock');

function setTime(){
    var d = new Date();
    var gethrs = d.getHours();
    var getmin = d.getMinutes();
    var getsec = d.getSeconds();
    clock.innerHTML = gethrs +":"+ getmin + ":" + getsec;


    if((gethrs == 10)&&(getmin <= 15)){
        msg.innerHTML = " Tea Time";
    }else if((gethrs == 14)&&(getmin <= 15)){
        msg.innerHTML = " Lunch Time";
    }else if((gethrs == 18)&&(getmin <= 15)){
        msg.innerHTML = "Break Fast Time";
    }else if((gethrs == 21)&&(getmin <= 15)){
        msg.innerHTML = " Dinner Time";
    }else{
        msg.innerHTML = ""
    }
}


setInterval(setTime,1000);
