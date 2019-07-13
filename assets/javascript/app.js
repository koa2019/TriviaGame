window.onload = function loadGame() {

    var clockRunning = false;  //sets clocks starting point to off
    var time = 5;   //countdown starting point
    var timer;      //will hold setTimeOut()

    /************* trivia questions variables ******/
    var numCorrect = 0;
    var numWrong = 0;
    var unanswered = 0;
    var userInput;

    var trivia = {
        questions: [
            {
                q1: "Question 1. Pick a b c ",
                q2: "Question 3. Pick a b c",
                q3: "Question 2. Pick a b c",
            }
        ],
        options: [
            {
                o1: [" a1 ", " b1 ", " c1 "],
                o2: [" a2 ", " b2 ", " c2 "],
                o3: [" a3 ", " b3 ", " c3 "],
            }
        ],
        answers: [1, 2, 0]     
        
    };
    console.log(trivia.questions[0].q1);   


    $('#timeRemaining').text("00:05");
    $('#timeRemaining').hide();
    $("#start").on('click', startGame);
    $("#stop").on('click', stop);
    showQuestions();





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

    function showQuestions() {
        for (var i = 0; i < 3; i++) {
            // $('.questions').append(trivia[0].q1[0]);
            $(".questions").text(trivia.questions[0].q1);
            $('.options').text(trivia.options[0].o1);
            // console.log(trivia[0].q1[0]);
        }
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
