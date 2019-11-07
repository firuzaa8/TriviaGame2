var numberOne;
var numberTwo;
var numberThree;
var currentQuestion;
var interval;

var questions = [ {
    q: "Which character has NEVER been the chair of the party planning committee?",
    a: ["Dwight", "Kelly", "Phyllis", "Angela"],
    correct: "Kelly",
    img: "kelly.gif"
},
{
    q: "Meredith claims she was working on a degree in what field during the years the documentary crew was filming her?",
    a: ["Women's Studies", "Business Ethics", "Addiction Counseling", "School Psychology"],
    correct: "School Psychology",
    img: "schoolpsycology.gif"
},
{
    q: "Dwight Schrute plays which of the following musical instruments?",
    a: ["Piano", "Recorder", "Banjo", "Harpsichord"],
    correct: "Recorder",
    img: "recorder.gif"
},
{
    q: "Who plays a character that is NOT killed off in Michael's action thriller, 'Threat Level Midnight?'",
    a: ["Oscar", "Jan", "Toby", "Andy"],
    correct: "Andy",
    img: "andy.gif"
},
{
    q: "Which character attended high school with Michael?",
    a: ["Dwight", "Todd Packer", "Phyllis", "Kevin"],
    correct: "Phyllis",
    img: "phyllis.gif"
},
{
    q: "Which of the following is Holly Flax's full first name?",
    a: ["Helene", "Hollis", "Holly", "Holland"],
    correct: "Hollis",
    img: "hollis.gif"
},
{
    q: "What is the name of Ryan's social networking venture?",
    a: ["ARPHF.com", "WUPHF.com", "BARQ.com", "RUPHF.com"],
    correct: "WUPHF.com",
    img: "wuphf.com.jpg"
},
{
    q: "What is the name of Jim and Pam's eldest child?",
    a: ["Bebe", "CeCe", "Deedee", "Fifi"],
    correct: "CeCe",
    img: "cece.gif"
},


];
function displayQuestion() {
    var counter = 20;
    $("#countdown").text(counter);

    interval = setInterval(function() {
        counter--;
        $("#countdown").text(counter);
        if (counter == 0) {
            numberThree++;
            clearInterval(interval);
            $("#pic").show();
            $("#answer").text(questions[currentQuestion].correct);
            $("#pic").attr("src", "assets/images/" + questions[currentQuestion].img);
            $(".a").attr("disabled", true);
            questionDelay();

        }
    }, 1000);

    var next = questions[currentQuestion];
    $("#q").text(next.q);
    $("#a0").text(next.a[0]);
    $("#a1").text(next.a[1]);
    $("#a2").text(next.a[2]);
    $("#a3").text(next.a[3]);

    $(".a").attr("disabled", false);
}
function questionDelay() {
    setTimeout(function() {
        currentQuestion++;
        if (currentQuestion == questions.length){
            gameOver();
        }
        else {
        displayQuestion();  
        $("#yes").hide();
        $("#pic").hide();
        $("#nope").hide();
        $("#failed").hide();}
    }, 3000);

}

function reset() {
    currentQuestion = 0;
    
}

function gameOver() {
    $("#done").show();
    $("#stats").show();
    $("#game").hide();
    $("#pic").hide();
    $("#yes").hide();
    $("#nope").hide();
    $("#number1").text(numberOne);
    $("#number2").text(numberTwo);
    $("#number3").text(numberThree);
}

$(document).ready(function() {
    $("#question").hide();
    $("#nope").hide();
    $("#done").hide();
    $("#start").show();
    $("#timeout").hide();
    $("#failed").hide();
    $("#yes").hide();
    $("h3").hide();
    $("#stats").hide();

    $(".a").click(function() {
        clearInterval(interval);

        if ($(this).text() == questions[currentQuestion].correct){
            $("#yes").show();
            $("#pic").show();
            $("#pic").attr("src", "assets/images/" + questions[currentQuestion].img)
            numberOne++;
        }
        else {
            $("#nope").show();
            $("#failed").show();
            $("#pic").show();
            $("#answer").text(questions[currentQuestion].correct);
            $("#pic").attr("src", "assets/images/" + questions[currentQuestion].img)
            numberTwo++;
        }
        questionDelay();

        $(".a").attr("disabled", true);
    });
    
    $("#start, #done").click(function() {
        $("h3").show();
        $("#question").show();
        interval;
        numberOne = 0;
        $("#number1").html(numberOne);
        numberTwo = 0;
        $("#number2").html(numberTwo);
        numberThree = 0;
        $("#number3").html(numberThree);
        reset();
        displayQuestion();
        $("#nope").hide();
        $("#start").hide();
        $("#timeout").hide();
        $("#failed").hide();
        $("#yes").hide();
        $("#stats").hide();
        $("#game").show();
    });
});
