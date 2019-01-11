$(document).ready(function() {
    //init vars
    var wins = 0;
    var losses = 0;
    var salesGoal = 0;
    var salesTotal = 0;
    var gemArray = [0, 0, 0, 0];

    //functions
            //init game
    function gameInit() {
        salesGoal = 0;
        salesTotal = 0;
        gameStart();
    }
            //check for win/lose condition//
    function winnerLoser() {
        if (salesTotal === salesGoal) {
            wins++;
            $("#wins").text(wins);
            $("#result").text("Responsible Winner!");
            gameInit();
        }
        else if (salesTotal > salesGoal) {
            losses++;
            $("#losses").text(losses);
            $("#result").text("Avaricious Loser!");
            gameInit();
        }
    }
            //generate and display goal
    function gameStart() {
        salesGoal = Math.floor(Math.random() * (120 - 19) + 19);
        for (i = 0; i < gemArray.length; i++) {
            gemArray[i] = Math.floor(Math.random() * (12 - 1) + 1);
        }
        console.log(gemArray)
        $("#sales-goal").text(salesGoal);
    }
            //click events
    $("img").click(function (){
        if ($(this).attr("id") == "emerald") {
            salesTotal = salesTotal + gemArray[0];
            winnerLoser();
        }
        else if ($(this).attr("id") == "amethyst") {
            salesTotal = salesTotal + gemArray[1];
            winnerLoser();
        }
        else if ($(this).attr("id") == "diamond") {
            salesTotal = salesTotal + gemArray[2];
            winnerLoser();
        }
        else if ($(this).attr("id") == "ruby") {
            salesTotal = salesTotal + gemArray[3];
            winnerLoser();
        }
        $("#sales-total").text(salesTotal);
        console.log(salesTotal);
    });
    
    //call start
    gameStart();
});