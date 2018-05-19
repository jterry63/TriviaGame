
$(document).ready(function () {
    console.log('ready');
    var htmlString = "start";

    var timer = {
        time: 50,

        run: function () {
            counter = setInterval(timer.decrement, 1000);
        },

        decrement: function () {
            timer.time--;

            $('#timeRemaining').html("Time Remaining to complete all 4 questions: " + timer.time);
            if (timer.time === 0) {

                alert("Times up, you lose! Please try again!");
                window.location.reload(true);
            };
        },
    }


    //create an object that is going to hold all of my questions and answers for the trivia game

    var triviaQuestions = {

        first: {
            question: "What is Tiger Wood's full given name?",
            a: "A: Tiger Woods",
            b: "B: Eldrick Tont Woods",
            c: "C: James Tiger Woods",
            d: "D: Tiger Eldrick Woods",
            correct: "B: Eldrick Tont Woods",
        },
        second: {
            question: "How many majors did Jack Nicklaus win in his career?",
            a: "A: 18",
            b: "B: 3",
            c: "C: 32",
            d: "D: 7",
            correct: "A: 18",
        },
        third: {
            question: "Arnold Palmer was the first professional golfer to earn $1 million during his career. What year did he pass the $1 million mark in career earnings?",
            a: "A: 1950",
            b: "B: 1965",
            c: "C: 1968",
            d: "D: 2017",
            correct: "C: 1968",
        },
        fourth: {
            question: "Which of the following is a famous quote from Ben Hogan?",
            a: "A: I’m in a glass case of emotion!",
            b: "B: No, it’s a cardigan, but thanks for noticing!",
            c: "C: We get the warhead and we hold the world ransom for... One million dollars.",
            d: "D: As you walk down the fairway of life you must smell the roses, for you only get to play one round.",
            correct: "D: As you walk down the fairway of life you must smell the roses, for you only get to play one round.",
        },
    };

    //create functions and if/else statements to start timer, display question and possible answers, alert with result of answer selection, and go to next question

    console.log(htmlString);


    function startGame() {



        $("#questionPrompt").html(triviaQuestions.first.question);
        $("#possibleAnswer1").html(triviaQuestions.first.a);
        $("#possibleAnswer2").html(triviaQuestions.first.b);
        $("#possibleAnswer3").html(triviaQuestions.first.c);
        $("#possibleAnswer4").html(triviaQuestions.first.d);

        $("#possibleAnswer1").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");
        })
        $("#possibleAnswer2").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are correct! Great job!");

        })
        $("#possibleAnswer3").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");
        })
        $("#possibleAnswer4").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");
        })
        $("#next").click(function () {
            nextQuestion();
        })


    }


    startGame();

    timer.run();





    function nextQuestion() {

        $("#answered").html("");
        $("#questionPrompt").html(triviaQuestions.second.question);
        $("#possibleAnswer1").html(triviaQuestions.second.a);
        $("#possibleAnswer2").html(triviaQuestions.second.b);
        $("#possibleAnswer3").html(triviaQuestions.second.c);
        $("#possibleAnswer4").html(triviaQuestions.second.d);

        $("#possibleAnswer1").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are correct! Great job!");
        })
        $("#possibleAnswer2").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");

        })
        $("#possibleAnswer3").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");
        })
        $("#possibleAnswer4").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");
        })

        $("#next").click(function () {
            nextQuestion2();
        })

    }

    function nextQuestion2() {

        $("#questionPrompt").html(triviaQuestions.third.question);
        $("#possibleAnswer1").html(triviaQuestions.third.a);
        $("#possibleAnswer2").html(triviaQuestions.third.b);
        $("#possibleAnswer3").html(triviaQuestions.third.c);
        $("#possibleAnswer4").html(triviaQuestions.third.d);

        $("#possibleAnswer1").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");
        })
        $("#possibleAnswer2").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");

        })
        $("#possibleAnswer3").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are correct! Great job!");
        })
        $("#possibleAnswer4").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");
        })

        $("#next").click(function () {
            nextQuestion3();
        })
    }
    function nextQuestion3() {

        $("#questionPrompt").html(triviaQuestions.fourth.question);
        $("#possibleAnswer1").html(triviaQuestions.fourth.a);
        $("#possibleAnswer2").html(triviaQuestions.fourth.b);
        $("#possibleAnswer3").html(triviaQuestions.fourth.c);
        $("#possibleAnswer4").html(triviaQuestions.fourth.d);

        $("#possibleAnswer1").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");
        })
        $("#possibleAnswer2").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");

        })
        $("#possibleAnswer3").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are incorrect!");
        })
        $("#possibleAnswer4").click(function () {
            var htmlString = $(this).text();
            console.log(htmlString);
            $("#answered").html("You are correct! Great job!");
        })

        $("#next").click(function () {
            alert("Thanks for playing!");
            window.location.reload(true);


        })
    }


});