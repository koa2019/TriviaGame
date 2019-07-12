window.onload = function loadGame () {

var clockRunning = false;  //sets clocks starting point to off
var time = 5;   //countdown starting point
var timer;      //will hold setTimeOut()


    $('#timeRemaining').text("00:05");
    $('#timeRemaining').hide();


// $(document).ready(function () {

    $("#start").on('click', startGame);
    $("#stop").on('click', stop);

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

        if (time < 0) {

            timeUp();
            stop();

            setTimeout(reset, 3000);
        }
        console.log('time: ' + time);
    }

    function showCountdown() {

        $('#timeRemaining').text('00:0' + time);
    }

    function timeUp() {

        $("#timeRemaining").text("Game Over!");
    }

    function reset() {

        // time = 5;

        // $("#timeRemaining").text("00:05");

        // startGame();
        window.location.reload();
    }

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

// });
}
