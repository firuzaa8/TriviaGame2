var numberOne;
var numberTwo;
var numberThree;
var currentQuestion;

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
    img: "wuphf.jpg"
},
{
    q: "What is the name of Jim and Pam's eldest child?",
    a: ["Bebe", "CeCe", "Deedee", "Fifi"],
    correct: "CeCe",
    img: "cece.gif"
},


];
function displayQuestion() {
    var next = questions[currentQuestion];
    $("#q").text(next.q);
    $("#a0").text(next.a[0]);
    $("#a1").text(next.a[1]);
    $("#a2").text(next.a[2]);
    $("#a3").text(next.a[3]);
}

function rightAnswer() {

}



function wrongAnswer() {

}

function reset() {
    currentQuestion = 0;
    
}

function updateStats() {
}

$(document).ready(function() {
    $("#countdown").hide();
    $(".a").click(function() {
    if ($(this).text() == questions[currentQuestion].correct){
        $("#yes").show();
        $("#pic").attr("src", "assets/images/" + questions[currentQuestion].img)
    }
    });
    var interval;
    $("#start").click(function() {
        numberOne = 0;
        $("#number1").html(numberOne);
        numberTwo = 0;
        $("#number2").html(numberTwo);
        numberThree = 8;
        $("#number3").html(numberThree);
        reset();
        displayQuestion();
        $("#nope").hide();
        $("#start").hide();
        $("#timeout").hide();
        $("#failed").hide();
        $("#yes").hide();
        $("#countdown").hide();

        var counter = 20;                
        $("#countdown").text(counter);
        interval = setInterval(function() {
            counter--;
            $("#countdown").text(counter);
            if (counter == 0) {
                clearInterval(interval);
                $("#game").hide();
                $("#done").hide();
                $("#start").show();
                $("#stats").show();
                updateStats();
            } else {
                return;
            }
        }, 1000);
        
    });

    $("#done").click(function() {
        $("#game").hide();
        $("#done").hide();
        $("#start").show();
        $("#stats").show();
        clearInterval(interval);
        updateStats();
    });
});
