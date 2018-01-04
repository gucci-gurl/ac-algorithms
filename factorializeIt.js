//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//need a loop, the loop starts at 1 and ends at numm, we want the loop to increase each time by 1 (aka 1++)

//need a varibable to store the final answer 

//need a multiplying to incerease the final answer but mulyiplying  the number each time

function factorializeIt(num) {
  var result = 1;
  for (var i = 1; i <= num; i++){
    result = result * i;

  }
}

factorializeIt(5);