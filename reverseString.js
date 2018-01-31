// write a function that takes in a string and retruns that string but with all the characters in reverse order

//Input: a string, one parameter
//Need a variable to store the output string
//Need a variable to store the array that we create when we SPLIT the string into individual letters 
// Use a for loop to run through each letter and to then concatenate it the output string


function reverseString(str){
   var newString = "";
   var array1 = str.split("");
   
   for (var i = array1.length - 1; i >= 0; i--){
       newString += array1[i];
   }
   return newString;

   var test = reverseString('hello');
   console.log(test);
 
}