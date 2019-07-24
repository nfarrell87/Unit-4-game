


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

//start the game
function start(){
    //Assign each rune a random value generated above and do not display to user
    $(".hasteRune").attr("value", rune1);
    $(".illuRune").attr("value", rune2);
    $(".regenRune").attr("value", rune3);
    $(".ddrune").attr("value", rune4);
    //Generate target score between 19-120 and display to user
    targetScore = Math.floor(Math.random() * (120 - 19) + 19);
    $(".showTargetScore").text(targetScore);


    //When clicking a rune, add it's current random value to current score
    $(".rune").on("click", function() {
        currentScore = parseInt(currentScore);
        console.log(currentScore);
    })
}
start()