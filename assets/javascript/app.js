
var clockRunning = false;  //sets clocks starting point to off
var time = 5;   //countdown starting point
var timer;      //will hold setTimeOut()

/************* trivia questions variables ******/
var x;
var xValue;
var correct = 0;
var wrong = 0;
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
        correctAnswer: "45"
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
    $('.triviaDataText').hide();
    $("#start").on('click', startGame);
    $("#stop").on('click', stop);  //for testing purposes only
    // $('.options').on('click', isCorrect);
    showQuestions();

    ////////////FUNCTIONS//////////

    function gradeQuiz() {

        $.each(questions, function (index) {
          
        // userInput = $(this).val();
        userInput = $("input[name=opt0]:checked").val();  //CSS selector returns value of checked input based on each answer array
        console.log('userInput = ' + userInput);

        // var numCorrect = correct;
        // var numWrong = wrong;
        // var numUnAns = unanswered;

          console.log('index = ' + index);

        //     // var correctAns = questions[index].correctAnswer;
        //     // console.log('Correct answer: ' + correctAns);

        // if (userInput == null || timer === 0) {
        //     numUnAns = isUnanswered(unanswered);
        //     console.log('unanswered: ' + numUnAns);
        //     // $('#unanswered').text('Unanswered: ' + numUnAns);
        // }
        // // else if (userInput === correctAns) {
        // //     numCorrect = isCorrect(correct);
        // //     console.log('inside numCorrect =  ' + numCorrect);
        // //     // $('#correct').text('Correct: ' + numCorrect);
        // // }
        // else {
        //     numWrong = isWrong(wrong);
        //     console.log('wrong: ' + numWrong);
        //     // $('#wrong').text('Wrong' + numWrong);
        // }
        });

    }

    function makeRadio(val, questionIndex, answerIndex) {

        var optInput = $("<input type='radio'/>")
            .attr('name', 'opt' + questionIndex)
            .attr('value', val)
            .attr('id', 'question-' + questionIndex + '-' + answerIndex); // id needs to be unique and should have no spaces
        return optInput;
    }

    function makeLabel(val, questionIndex, answerIndex) {

        var optLabel = $("<label>"); //create label html element
        optLabel.text(val);  //write value of question[x].answer[x] to html page
        optLabel.attr("for", 'question-' + questionIndex + '-' + answerIndex); // Matches the makeRadio id 
        return optLabel;
    }

    function showQuestions() {

        for (var x = 0; x < questions.length; x++) {

            var questionTitle = $("<h2>").text(questions[x].prompt)  //declare variable, writes prompt[x] in header2 tag & assigns it to variable
            $(".questions-container").append(questionTitle); //writes to html page by appending variable data value to div id

            var optionsContainer = $("<div>");  //declare varaible & creates a new div tag
            var availableOptions = questions[x].answers;  //assigns questions[x].answer[] to new variable

            for (var y = 0; y < availableOptions.length; y++) {  //loop to iterate through each index of answer array

                //declare variables & call functions with parameters that represent 
                //current answer index value, question index & current iteration count
                //functions return new html elements which represent possible answers for trivia questions
                var radio = makeRadio(availableOptions[y], x, y);
                var label = makeLabel(availableOptions[y], x, y);

                //appends input & label html elements to page under div id=questions-container
                $(".questions-container").append(radio);
                $(".questions-container").append(label);

                radio.on('click', gradeQuiz);
                // console.log('inside x = ' + x);
                // console.log('inside correct answer =' + questions[x].correctAnswer); 
            }
            // console.log('outside x = ' + x);
            // console.log('outside correct answer = ' + questions[x].correctAnswer); 
        }
    }

    function startGame() {

        $("#start").hide();
        $('#timeRemaining').show();
        $('.triviaDataText').show();

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
        // console.log('time: ' + time);
    }

    function showCountdown() {

        $('#timeRemaining').text('00:0' + time);
    }

    function timeUp() {

        $("#timeRemaining").text("Game Over!");
        $('.triviaDataText').hide();

        $('#correct').text('Correct: ' + correct);
        $('#wrong').text('Wrong: ' + wrong);
        $('#unanswered').text('Unanswered: ' + unanswered);

    }

    function reset() {
        window.location.reload();
    }
    function isCorrect() {
        correct++;
        // console.log('isCorrect = ' + correct);
        return correct;
    }
    function isWrong() {
        return wrong++;
    }
    function isUnanswered() {
        return unanswered++;
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
