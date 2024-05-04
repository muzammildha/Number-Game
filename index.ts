// Number Game

 let guess : number =  5

 const target : number = Math.floor(Math.random() * 10 + 1) ;

console.log(guess)

 if (guess < target ){

    console.log("Your guess is too low");

 }  else if (target > guess){

    console.log ("Your Guess is Too High");

 } else {

    console.log("You Guessed Correctly");

 }

 
