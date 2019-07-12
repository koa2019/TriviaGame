$(document).ready(function() { 

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 10;
var timer;      //will hold setTimeOut()


$("#start").on('click', startGame);

$('#timeRemaining').hide();

////////////FUNCTIONS//////////
function startGame() {

    $("#start").hide();

    $('#timeRemaining').text("00:00");
    
    $('#timeRemaining').show();

    if (!clockRunning) {
        timer = setInterval(countdown, 10000);
        clockRunning = true;
      }
}
function countdown () {

    time--;
}

function setTimer() {

   timer = setTimeout(5000);
   $('timeRemaining').text(timer);
}

function timeUp() {

    $("#timeRemaining").text("Game Over!");
    alert("Time's Up!");
}
function reset() {

    $("#timeRemaining").text("00:00");
}

});
