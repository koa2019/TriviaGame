
var clockRunning = false;  //sets clocks starting point to off
var time = 5;   //countdown starting point
var timer;      //will hold setTimeOut()

/************* trivia questions variables ******/
var numCorrect = 0;
var numWrong = 0;
var unanswered = 0;
var userInput;

var questions = [
    {

        q1: "How old is Hello Kitty?",
        opt1: [" 45 ", " 20 ", " 7 "],
        answer1: '45',
    },
    { //compare answer based on value
        q2: "How old is Kerope ",
        opt2: [" 5 ", " 70 ", " 50 "],
        answer2: '50',
    }
    
];

window.onload = function loadGame() {

    $('#timeRemaining').text("00:05");
    $('#timeRemaining').hide();
    $("#start").on('click', startGame);
    $("#stop").on('click', stop);
    showQuestions();


    ////////////FUNCTIONS//////////
    function showQuestions() {

        // for(var i = 1; i <= questions.length;i++) {

        $(".question1").append(Object.values(questions[0].q1));
        $(".question2").append(Object.values(questions[1].q2));

        // $('.options').append(Object.values(questions[1] ));

        // }
    }
    function isCorrect(){
        
    }
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
