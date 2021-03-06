/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18;
const age = 19;
if (age > votingAge) {
  console.log("True");
} else {
  console.log("False");
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
const voter = True;
const votingAge = 18;
const age = 19;
if (age < votingAge) {
    voter = False;
    console.log('Too young to vote.')
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
console.log(Number("1999"));




//Task d: Write a function to multiply a*b 
function mult(a, b) {
    return a * b;
}




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears(age) {
    return age * 7;
}




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(age, weight) {
    if (age >= 1 && weight <= 5) {
        return weight * .05;
    } else if
        (age >= 1 && weight >= 6 && weight <= 10) {
        return weight * .04;
    } else if
        (age >= 1 && weight >= 11 && weight <= 15) {
        return weight * .03;
    } else if
        (age >= 1 && weight > 15) {
        return weight * .02
    } else if
        (age < 1 && age >= 0.583) {
        return weight * .04;
    } else if
        (age < 0.583 && age >= 0.333) {
        return weight * .05;
    } else if
        (age < 0.333) {
        return weight * 0.1;
    } else {
        return 'Error in data input.'
    }
}





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
let computer = Math.random();
if (computer <= 0.34) {
  computer = "rock";
} else if (computer <= 0.67) {
  computer = "paper";
} else if (computer > 0.67) {
  computer = "scissors";
}
function game(user, computer) {
  if (user === computer) {
    return `it's a tie`;
  } else if (user === "rock" && computer === "scissors") {
    return `you win!`;
  } else if (user === "paper" && computer === "rock") {
    return `you win!`;
  } else if (user === "scissors" && computer === "paper") {
    return `you win!`;
  } else {
    return `you lose!`;
  }
}
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
const kmConverter = (km) => {
    return km * 0.621371;
}

console.log(kmConverter(2));




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
const footConverter = (feet) => {
    return feet * 30.48;
}

console.log(footConverter(3));




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
const annoyingSong = (number) => {
    for (i = number; i > 0; i--) {
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`);
    }
}
annoyingSong(10);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
const gradeCalc = (score) => {
    if (score >= 90 && score <= 100)
    { console.log('Your grade is an A.') }
    else if
        (score >= 80 && score < 90)
    { console.log('Your grade is a B.') }
    else if
        (score >= 70 && score < 80)
    { console.log('Your grade is a C.') }
    else if
        (score >= 60 && score < 70)
    { console.log('Your grade is a D.') }
    else if
        (score >= 0 && score < 60)
    { console.log('Your score is an F.') }
    else
        { console.log('Error in data input.')}
    }

gradeCalc(72);
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

 const vowels = ["a", "e", "i", "o", "u"];
 function vowelCounter(text) {
   let counter = 0;
   for (let letter of text.toLowerCase()) {
     if (vowels.includes(letter)) {
       counter++;
     }
   }
   return `The text contains ${counter} vowel(s)`;
 }
 console.log(vowelCounter("Supercalifragilisticexpealidocious"));




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let userPrompt = prompt("Do you choose rock, paper, or scissors?");
let computer = Math.random();
if (computer <= 0.34) {
  computer = "rock";
} else if (computer <= 0.67) {
  computer = "paper";
} else if (computer > 0.67) {
  computer = "scissors";
}
function game(user, computer) {
  if (user === computer) {
    return `It's a tie`;
  } else if (user === "rock" && computer === "scissors") {
    return `You win!`;
  } else if (user === "paper" && computer === "rock") {
    return `You win!`;
  } else if (user === "scissors" && computer === "paper") {
    return `You win!`;
  } else {
    return `You lose!`;
  }
}
console.log(game(userPrompt, computer));



