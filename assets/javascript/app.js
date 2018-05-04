var questions =  [
    {   
        question: "Jeanette Rankin was the first woman elected to what?",
        answers: {
            a: "Supreme Court Judge",
            b: "US Congress",
            c: "Governor",
            d: "Mayor"
        }, 
        correctAnswer: "b",
        explanation: "In 1916, Jeannette Rankin was the first woman to be elected to the United States House of Representatives and the first female member of Congress, sometimes referred to as the Lady of the House."
    }, 
    {
        question: "In 1932, Amelia Earhart was the first woman to:",
        answers: {
            a: "Fly around the world",
            b: "Fly a plane",
            c: "Fly solo across the Atlantic",
            d: "Fly in Air Force"
        }, 
        correctAnswer: "c",
        explanation: "In May of 1932 Amelia Earhart became the first woman to fly solo across the Atlantic."
    },
    {
       question: "In what year did American women win the right to vote?",
       answers: {
            a: "1905",
            b: "1920",
            c: "1930",
            d: "1875"
        }, 
        correctAnswer: "b",
        explanation: "The 19th Amendment, ratified on August 18, 1920, prohibits each state and the federal government from denying any citizen the right to vote because of that citizen's sex."
    },
    {
        question: "Who was the first woman to be U.S. Secretary of State?",
        answers: {
            a: "Condoleezza Rice",
            b: "Madeleine Albright",
            c: "Elizabeth Dole",
            d: "Carol Moseley Braun"
        }, 
        correctAnswer: "b",
        explanation: "Madeleine Albright is the first woman to become a United States Secretary of State. She was appointed by U.S. President Bill Clinton on December 5, 1996."
    },
    {
        question: "Lizzie Magie was the inventor of the original Monopoly, what was it called?", 
        answers: {
            a: "The Mortgage Game",
            b: "The Landlords Game",
            c: "The Boardwalk Game",
            d: "The Real Estate Game"
    }, 
        correctAnswer: "b",
        explanation: "In 1904, Lizzie Magie invented a game called The Landlords Game a forerunner of the Monopoly game."
    },
    {
        question: "As one of the first leaders for women's rights, who was the first woman pictured on a US coin in circulation?",
        answers: {
            a: "Susan B. Anthony",
            b: "Matilda Gage",
            c: "Harriet Tubman",
            d: "Lucy Stone"
    }, 
        correctAnswer: "a",
        explanation: "Susan B. Anthony was the first woman to be honored by being printed on a circulating United States coin."
    },
    {
        question: "Who was the first female member of the Supreme Court?",
        answers: {
            a: "Carol Moseley Braun",
            b: "Sonia Sotomayor",
            c: "Ruth Bader Ginsburg",
            d: "Sandra Day O'Connor"
        },  
        correctAnswer: "d",
        explanation: "Sandra Day O'Connor"
    },
    {
        question: "Which famous actress, who starred in the film adaptation of the Harry Potter series, recently started the 'He for She' campaign for gender equality?",
        answers: {
            a: "Julia Roberts",
            b: "Angelina Jolie",
            c: "Emma Watson",
            d: "Jennifer Lawrence"
            },  
        correctAnswer: "c",
        explanation: "HeForShe is a solidarity campaign for the advancement of Gender equality, initiated by UN. Its goal is to achieve equality by encouraging all genders as agents of change and take action against negative stereotypes and behaviors, faced by people with feminine personalities/genders.Grounded in the idea that gender inequality is an issue that affects all people—socially, economically and politically—it seeks to actively involve men and boys in a movement that was originally conceived as 'a struggle for women by women'. <br> A special event was held to kick-start the HeForShe campaign on 20 September 2014 at the Headquarters of the United Nations in New York. It was hosted by UN Women Goodwill Ambassador Emma Watson, whose speech—about her own path to feminism and her call to involve men and boys in promoting gender equality."
    },
    {
        question: "Malala Yousafzai, a teenage Pakistani political campaigner, released her autobiography I Am Malala in 2012 after being shot for what reason?",
        answers: {
            a: "Shopping unaccompanied",
            b: "Not wearing traditional clothing",
            c: "Walking with an unrelated man",
            d: "Encouraging girls' education"
        },  
        correctAnswer: "d",
        explanation: "Malala Yousafzai was shot in the head by Taliban gunmen - her 'crime', to have spoken up for the right of girls to be educated."
    },
    {
        question: "Who wrote A Vindication of the Rights of Woman, one of the first feminist books, in 1792?",
         answers: {
            a: "Mary Wollstonecraft",
            b: "Simone de Beauvoir",
            c: "Virginia Woolf",
            d: "Mary Shelley"
            },  
        correctAnswer: "a",
        explanation: "Wollstonecraft was prompted to write the Rights of Woman after reading Charles Maurice de Talleyrand-Périgord's 1791 report to the French National Assembly, which stated that women should only receive a domestic education."
    }    
];

// each question pops up one at a time, display question, answers; have timer (10 seconds)
// once guessed or timer has run out then correct/incorrect and explanation appears with a replay button
// press replay button, then questionNumber++;
// questionNumber=9, game over and spit out correct userGuesses

var questionNumber = 0;
var numCorrect = 0;
var timerTime = 11;
var intervalId;

function timer() {
    timerTime--;
    $("#timer").text(timerTime);
    if (timerTime === 0) {
        clearInterval();
        evalAnswer();
    }
}

function askQuestion(question) {
    $("#image").attr("src", "assets/images/illustration.jpeg");
    intervalId = setInterval(timer, 1000);
    timerTime = 11;
    $("#replay").hide();
    $("#timer").show();
    $("#answerA").show();
    $("#answerB").show();
    $("#answerC").show();
    $("#answerD").show();
    $("#question").text(question.question);
    $("#answerA").text(question.answers.a);
    $("#answerB").text(question.answers.b);
    $("#answerC").text(question.answers.c);
    $("#answerD").text(question.answers.d);    
}

$("#answerA").on("click", function (){
    evalAnswer("a");
});
$("#answerB").on("click", function (){
    evalAnswer("b");
});
$("#answerC").on("click", function (){
    evalAnswer("c");
});
$("#answerD").on("click", function (){
    evalAnswer("d");
});

function evalAnswer(button) {
    clearInterval(intervalId);
    $("#replay").hide();
    $("#result").show();
    $("#explanation").show();
    $("#timer").text("next");
    if (button == questions[questionNumber].correctAnswer) {
        numCorrect++;
        $("#result").text("Correct");
        $("#explanation").text(questions[questionNumber].explanation);
    }
    if (button != questions[questionNumber].correctAnswer) {
        $("#result").text("Incorrect");
        $("#explanation").text(questions[questionNumber].explanation);
    }
}
    
$("#timer").on("click",function() {
    questionNumber++;
    $("#result").empty();
    $("#explanation").empty();
    if (questionNumber > 9) {
        endGame();
    } else {
    askQuestion(questions[questionNumber]); 
    }
});

function endGame() {
    if (numCorrect > 8) {
        $("#image").attr("src", "assets/images/youRock.jpg");
    }
    $("#answerA").hide();
    $("#answerB").hide();
    $("#answerC").hide();
    $("#answerD").hide();
    $("#result").empty();
    $("#explanation").empty();
    clearInterval(intervalId);
    $("#question").text("You got " + numCorrect + " correct out of 10!");
    $("#timer").hide();
    $("#replay").show();
    $("#replay").text("Replay");
    $("#replay").on("click", function() {
        questionNumber = 0;
        numCorrect = 0;
        askQuestion(questions[questionNumber]);
    });
    
}

askQuestion(questions[questionNumber]);