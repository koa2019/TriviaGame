#README
This app allows user to click on start button which initiates a countdown timer and trivia questions for them to answer.

User has an alloted time to answer questions before time runs out and the results of their choices are displayed.


User is given 3 multiple choice answers for each question 

User can pick only 1 multiple choice answer.

When the timer runs out the app will automatically reload page to allow user to start fresh from the begining.

# TriviaGame Instructions
Basic Quiz (Timed Form)

![Basic](Images/1-basic.jpg)

**[Click Here to Watch the Demo](https://youtu.be/fBIj8YsA9dk)**.

* You'll create a trivia form with multiple choice or true/false options (your choice).

* The player will have a limited amount of time to finish the quiz. 

  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

* Don't let the player pick more than one answer per question.

* Don't forget to include a countdown timer.
<!-- ****************************************************** -->

#basic psuedo

*Display start button

*create eventListener .on('click', function()) {
    
    *hides start button

    *set timer

    *if timer > 0, then display trivia QQs

    *else display numCorrect, numWrong, numUnanswered

    *display countdown timer

}


