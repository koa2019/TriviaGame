//----------timer variables----------------
var clockRunning = false; //sets clocks starting point to off
var time = 5; //countdown starting point
var timer; //will hold setTimeOut()

//----------quiz variables----------------
var x;
var xValue;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var userInput;
var optInput; //will reference <inuput>
var optVal; //will reference optValArr[x]
var optValArr = ["a", "b", "c"]; //<input values=" " />

//questions object array. 
var questions = [{
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

window.onload = function() {

    $('#timeRemaining').text("00:05");
    $('#timeRemaining').hide();
    $('.triviaDataText').hide();
    $("#start").on('click', startGame);
    $("#stop").on('click', stop); //for testing purposes only
    showQuestions();

    // ----------function definitions----------------
    function startGame() {

        $("#start").hide();
        $('#timeRemaining').show();
        $('.triviaDataText').show();

        if (!clockRunning) {
            timer = setInterval(countdown, 1000);
            clockRunning = true;
        }
    }

    // ----------quiz question functions----------------
    function gradeQuiz() {
        var index = $(this).attr('question-index');
        var correctAnswer = questions[index].correctAnswer;
        userInput = $("input[question-index = " + index + "]:checked").val();

        //     //CSS selector returns value of checked input based on each answer array
        //     // groups of radios have a name of opt0 or opt1 where 0 and 1 represents the question number
        //     userInput = $("input[name= opt" + x + " ]:checked").val();

        if (userInput === correctAnswer) {
            isCorrect();
        } else {
            isWrong();
        }

        // if (userInput == null || timer <= 0) {
        //     isUnanswered();
        //     // console.log('inside if/else unanswered: ' + unanswered);
        // }

        console.log('Correct =  ' + correct);
        console.log('wrong: ' + wrong);
        console.log('unanswered: ' + unanswered);

    }

    function showQuizResults() {
        $('#correct').text('Correct: ' + correct);
        $('#wrong').text('Wrong: ' + wrong);
        $('#unanswered').text('Unanswered: ' + unanswered);
    }

    function showQuestions() {
        var radio;
        for (var x = 0; x < questions.length; x++) {
            var questionTitle = $("<h2>").text(questions[x].prompt) //declare variable, writes prompt[x] in header2 tag & assigns it to variable
            $(".questions-container").append(questionTitle); //writes to html page by appending variable data value to div id

            var optionsContainer = $("<div>"); //declare varaible & creates a new div tag
            var answers = questions[x].answers; //assigns the array of answers of questions[x] to varaible
            // var availableOptions = questions[x].answers; 
            console.log(answers);
            var a = answers[0],
                b = answers[1],
                c = answers[2];
            var radio1, radio2, radio3;
            var label1, label2, label3;
            radio1 = makeRadio(a, x, 0);
            radio2 = makeRadio(b, x, 1);
            radio3 = makeRadio(c, x, 2);
            label1 = makeLabel(a, x, 0);
            label2 = makeLabel(b, x, 1);
            label3 = makeLabel(c, x, 2);
            $(".questions-container").append(radio1).append(label1).append(radio2).append(label2).append(radio3).append(label3);
            radio1.on('click', gradeQuiz);
            radio2.on('click', gradeQuiz);
            radio3.on('click', gradeQuiz);


            //     for (var y = 0; y < availableOptions.length; y++) { //loop to iterate through each index of answer array

            //         //declare variables & call functions with parameters that represent 
            //         //current answer index value, question index & current iteration count
            //         //functions return new html elements which represent possible answers for trivia questions
            //         radio = makeRadio(availableOptions[y], x, y);
            //         var label = makeLabel(availableOptions[y], x, y);

            //         //appends input & label html elements to page under div id=questions-container
            //         $(".questions-container").append(radio);
            //         $(".questions-container").append(label);
            //     }
            //     radio.on('click', gradeQuiz);
        }
    }

    // ----------quiz display radio button functions----------------
    function makeRadio(val, questionIndex, answerIndex) {

        var optInput = $("<input type='radio'/>")
            // .attr('name', 'opt-' + questionIndex)
            // .attr('data-index', questionIndex)
            .attr('question-index', questionIndex)
            .attr('value', val)
            .attr('id', 'question-' + questionIndex + '-' + answerIndex); // id needs to be unique and should have no spaces
        return optInput;
    }

    function makeLabel(val, questionIndex, answerIndex) {

        var optLabel = $("<label>"); //create label html element
        optLabel.text(val); //write value of question[x].answer[x] to html page
        optLabel.attr("for", 'question-' + questionIndex + '-' + answerIndex); // Matches the makeRadio id 
        return optLabel;
    }

    // ----------quiz increase/decrease functions----------------
    function isCorrect() {
        correct++;
        // console.log('isCorrect = ' + correct);
    }

    function isWrong() {
        wrong++;
    }

    function isUnanswered() {
        unanswered++;
    }

    //--------------Timer Functions-----------------    
    function countdown() {

        time--;
        showCountdown();

        if (time < 0) {
            timeUp();
            stop();
            setTimeout(reset, 5000);
        }
        // console.log('time: ' + time);
    }

    function stop() {
        clearInterval(timer);
        clockRunning = false;
    }

    function reset() {
        window.location.reload();
    }

    function showCountdown() {

        $('#timeRemaining').text('00:0' + time);
    }

    function timeUp() {

        $("#timeRemaining").text("Game Over!");
        $('.triviaDataText').hide();
        showQuizResults();

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