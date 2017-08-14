var timeoutHandle;

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        } else {
            if(mins > 1){
               setTimeout(function () { countdown(mins - 1); }, 1000);
            } else {
              window.alert('Sorry, you ran out of time!')
              document.getElementById("reset").disabled = true;
              document.getElementById("fillBeaker3").disabled = true;
              document.getElementById("emptyBeaker3").disabled = true;
              document.getElementById("transferFromBeaker3").disabled = true;
              document.getElementById("fillBeaker5").disabled = true;
              document.getElementById("emptyBeaker5").disabled = true;
              document.getElementById("transferFromBeaker5").disabled = true;
            }

        }
    }
    tick();
}

countdown(5);
