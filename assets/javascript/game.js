$(document).ready(function() {
    //init vars
    var wins = 0;
    var losses = 0;
    var salesGoal = 0;
    var salesTotal = 0;
    var gemArray = [];

    function gameInit() {
        console.log("||| SESSION STATS ||| WINS: " + wins + " ||| LOSSES: " + losses + " |||");
        salesGoal = 0; 
        salesTotal = 0;
        gameStart();
    }

    function gameStart() {
        //gen goal
        salesGoal = Math.floor(Math.random() * (120 - 19) + 19);
        $(".gems").push(gemArray);
        console.log(gemArray)
        for (i = 0; i < gemArray.length; i++) {
            gemArray[i] = Math.floor(Math.random() * (12 - 1) + 1);
        }
        console.log(gemArray)
        $("#sales-goal").text(salesGoal);
        $("#sales-total").text(salesTotal);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }

    $(".gems").on("click", function () {

		var crystalValue = ($(this).data("crystalvalue"));

		score = score + crystalValue;

		$("#totalScore").text(score);

		if (score === randomNumber) {
			wins++;
			$("#wins").text("Wins:" + " " + wins);
			$("#outcome").text("WINNER!");

        }
        else if (score > randomNumber) {
			losses++;
			$("#losses").text("Losses:" + " " + losses);
			$("#outcome").text("You Lose!");
        }
    });

    gameStart();




});