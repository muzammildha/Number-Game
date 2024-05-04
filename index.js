// Number Game
var guess = 5;
var target = Math.floor(Math.random() * 5 + 1);
console.log(guess);
if (guess < target) {
    console.log("Your guess is too low");
}
else if (target > guess) {
    console.log("Your Guess is Too High");
}
else {
    console.log("You Guessed Correctly");
}
