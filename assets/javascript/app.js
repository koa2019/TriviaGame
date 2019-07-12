$(document).ready(function () {

    // prevents the clock from being sped up unnecessarily
    var clockRunning = false;
    var time = 5;   //countdown starting point
    var timer;      //will hold setTimeOut()

    $('#timeRemaining').text("00:05");
    // $('#timeRemaining').hide();

    $("#start").on('click', startGame);
    $('#stop').on('click', stop);

    ////////////FUNCTIONS//////////
    function startGame() {

        $("#start").hide();
        $('#timeRemaining').show();

        if (!clockRunning) {

            timer = setInterval(countdown, 1000);

            clockRunning = true;            
        }
    }

    function stop() {

        clearInterval(timer);

        clockRunning = false;
    }

    function countdown() {

        time--;

        showCountdown();

        if (time <= 0) {

            stop();
        }
        console.log('time: ' + time);
    }

    function showCountdown () {

        $('#timeRemaining').text('00:0' + time);

    }

    // function reset() {

    //     $("#timeRemaining").text("00:05");
    // }

    // function timeUp() {

    //     $("#timeRemaining").text("Game Over!");
    //     alert("Time's Up!");
    // }    

    // function timeConverter(t) {

    //     var minutes = Math.floor(t / 60);
    //     var seconds = t - (minutes * 60);

    //     if (seconds < 10) {
    //         seconds = "0" + seconds;
    //     }

    //     if (minutes === 0) {
    //         minutes = "00";
    //     }
    //     else if (minutes < 10) {
    //         minutes = "0" + minutes;
    //     }

    //     return minutes + ":" + seconds;
    // }

});
