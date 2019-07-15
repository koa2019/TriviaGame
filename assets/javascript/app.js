
var clockRunning = false;  //sets clocks starting point to off
var time = 5;   //countdown starting point
var timer;      //will hold setTimeOut()

/************* trivia questions variables ******/
var numCorrect = 0;
var numWrong = 0;
var unanswered = 0;
var userInput;
var optInput;
var optVal;
var optValArr = ["a", "b", "c"];

var questions = 
    [
     "How old is Hello Kitty?",
     "How old is Kerope? "
    ];

var options = {
    opt0: [" 45 ", " 20 ", " 7 "],
    opt1: [" 5 ", " 70 ", " 50 "]
};

var answers = ["a", "c"];

window.onload = function () {

    $('#timeRemaining').text("00:05");
    $('#timeRemaining').hide();
    $("#start").on('click', startGame);
    $("#stop").on('click', stop);
    $('.options').on('click', isCorrect);
    showQuestions();

    ////////////FUNCTIONS//////////

    function renderOptions() {
        //creating a loop to generate 3 different options for a question
        for (var x = 0; x < 3; x++) {
            optInput = $('<input type = "radio" />'); //create input on HTML & assign all input tags to a variable
            optVal = optValArr[x];             //call function & assign data to variable
            optInput.attr('value', optVal); //create new HTML attr  for input tags & call function to assign its value a, b, c
            console.log('input value = ' + optVal);
            optInput.attr('id', 'opt' + optVal);  //create id HTML attr & assign value to be referenced
            
            optInput.text(options.opt0[x]);
            // optInput.text(options.opt1[x]);

            $('.options1').append(optInput);
            // $('.options1').append(optInput);

            $('#opt' + optVal).on('click', function() {

                userInput = $(this).attr('value'); //this represents whichever radio input user clicks & assigns it value to variable

                if(userInput == answers[x]) {
                    isCorrect();
                }
                else {
                    isWrong();
                }
            })
        }
    }
    function showQuestions() {

        // for (var x = 0; x < questions.length; x++) {

        //     $(".question" ).text(questions[x] );        
        // }
        $(".question0").append(Object.values(questions[0]));
        $(".question1").append(Object.values(questions[1]));
        
        renderOptions();

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
        $('.triviaDataText').hide();
        $('#correct').append('Correct: ' + numCorrect);
        $('#wrong').append('Wrong' + numWrong);
        $('#unanswered').append('Unanswered: ' + unanswered);

    }
    function reset() {
        window.location.reload();
    }
    function isCorrect() {
        numCorrect++;
    }
    function isWrong() {
        numWrong++;
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
