
var clockRunning = false;  //sets clocks starting point to off
var time = 5;   //countdown starting point
var timer;      //will hold setTimeOut()

/************* trivia questions variables ******/
var x;
var numCorrect = 0;
var numWrong = 0;
var unanswered = 0;
var userInput;
var optInput;  //will reference <inuput>
var optVal;   //will reference optValArr[x]
var optValArr = ["a", "b", "c"];  //<input values=" " />

//questions object array. 
//questions.length = 2. 
var questions = [
    { 
        //1 object with 3 keys & 3 data values
        prompt: "How old is Hello Kitty?",
        answers: ["45", "20", "7"],
        correctAnswer: ""
    },
    {
        prompt: "How old is Keroppi? ",
        answers: ["5", "70", "50"],
        correctAnswer: "50"
    }
]

window.onload = function () {

    $('#timeRemaining').text("00:05");
    $('#timeRemaining').hide();
    $("#start").on('click', startGame);
    $("#stop").on('click', stop);
    $('.options').on('click', isCorrect);
    showQuestions();

    ////////////FUNCTIONS//////////

    function gradeQuiz() {

    }
    
    function makeRadio(val, questionIndex, answerIndex) {
        var optInput = $("<input type='radio'/>")
        .attr('name', 'opt' + questionIndex)
        .attr('value', val)
        .attr('id', 'question-' + questionIndex + '-' + answerIndex); // id needs to be unique and should have no spaces
        return optInput;
    }

    function makeLabel(val, questionIndex, answerIndex) {

        var optLabel = $("<label>"); //create label

        optLabel.text(val);
        optLabel.attr("for", 'question-' + questionIndex + '-' + answerIndex); // Matches the makeRadio id 
        return optLabel;
    }

    function showQuestions() {

        for (var x = 0; x < questions.length; x++) {

            var questionTitle = $("<h2>").text(questions[x].prompt)
            $(".questions-container").append(questionTitle);

            var optionsContainer = $("<div>");
            var availableOptions = questions[x].answers;
            for (var y = 0; y< availableOptions.length; y++) {
                var radio = makeRadio(availableOptions[y], x, y);
                var label = makeLabel(availableOptions[y], x, y);

                optionsContainer.text(radio);
                optionsContainer.append(label);

                radio.on('click', gradeQuiz);
            }
 
        }      
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

    //function returns a html label tag with text & creates a "for" attribute for ...?
    // function makeLabel(val, x) {

    //     var optLabel = $("<label>"); //create label
    //     optLabel.text(val); //writes answers[] value to <label>
    //     optLabel.attr("for", x + val);  //adding a "for" attribute...?
    //     return optLabel;
    // }
    // function makeRadio(val, x) {

    //     //need to set val to something
    //     optVal = optValArr[x];

    //     //creates & returns an <input> with html attributes for.
    //     optInput = $("<input type='radio'/>")
    //     .attr('name', 'opt')
    //     .attr('value', optVal)
    //     .attr('id', x + optVal);

    //     return optInput;
    // }
    
    // function renderOptions() {
    //     //creating a loop to generate 3 different options for a question
    //     for (x = 0; x < 3; x++) {

    //         //declaring new variables & setting their value to
    //         //the functions return value
    //         var radio = makeRadio(x);
    //         var radioLabel = makeLabel(x);

    //         //adding the values of radio & radioLabel to html id=options
    //         $('.options').append(radio);
    //         $('.options').append(radioLabel);


    //         optInput.append(question0.opt0);

            
    //         $('').on('click', function () {

    //             userInput = $(this).attr('value'); //this represents whichever radio input user clicks & assigns it value to variable

    //             if (userInput == answers[x]) {
    //                 isCorrect();
    //             }
    //             else {
    //                 isWrong();
    //             }
    //         })
    //     }
    // }
   
}
