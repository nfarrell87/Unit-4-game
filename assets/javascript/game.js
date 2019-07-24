


//stop when it reaches target score of a random number between 19-120
//if it is greater than the target score, add a lose to lose counter and start the game over with new random values
//if it is equal to target score, add a win to win counter and start the game over with new random values
//Generate new random values each time we win or lose

//declare global variables
var currentScore;
var loses = 0;
var wins = 0;
//4 runes each with a random value between 1-12
var rune1 = Math.floor(Math.random() * (12 - 1) + 1);
var rune2 = Math.floor(Math.random() * (12 - 1) + 1);
var rune3 = Math.floor(Math.random() * (12 - 1) + 1);
var rune4 = Math.floor(Math.random() * (12 - 1) + 1);


//reset the game
function reset(){
    targetScore = Math.floor(Math.random() * (120 - 19) + 19);
    rune1 = Math.floor(Math.random() * (12 - 1) + 1);
    rune2 = Math.floor(Math.random() * (12 - 1) + 1);
    rune3 = Math.floor(Math.random() * (12 - 1) + 1);
    rune4 = Math.floor(Math.random() * (12 - 1) + 1);
    currentScore = 0
    $(".showCurrentScore").text("Current Score: " + currentScore);
    $(".showTargetScore").text("Target Score: " + targetScore);
    start(); 
}

//start the game
function start(){
    //Assign each rune a random value generated above and do not display to user
    $(".hasteRune").attr("value", rune1);
    $(".illuRune").attr("value", rune2);
    $(".regenRune").attr("value", rune3);
    $(".ddrune").attr("value", rune4);
    //set current score to 0 and display current score to user
    currentScore = 0
    $(".showCurrentScore").text("Current Score: " + currentScore)
    //Generate target score between 19-120 and display to user
    targetScore = Math.floor(Math.random() * (120 - 19) + 19);
    $(".showTargetScore").text("Target Score: " + targetScore);


    //When clicking a rune, add it's current random value to current score
    $(".rune").off().on("click", function() {
        //add value of clicked run to current score total when clicked
        var addRune = $(this).attr("value");
        currentScore = parseInt(currentScore) + parseInt(addRune)
        //refresh/display current score to user
        $(".showCurrentScore").text("Current Score: " + currentScore);

        if (targetScore === currentScore) {
            alert("You Won!");
            wins++;
            $(".totalWins").text("Total Wins: " + wins);
            $(".showCurrentScore").text("Current Score: 0");
            reset();

        }else if (currentScore > targetScore) {
            alert("You lost!");
            loses++;
            $(".totalLosses").text("Total Losses: " + loses);
            $(".showCurrentScore").text("Current score: 0");
            reset();
        }

    });
}
start()