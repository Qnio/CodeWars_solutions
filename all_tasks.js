//Missing Alphabet ---  Task 42

function insertMissingLetters (str){

const strToArr = [...str];
const missArr = [];
let strToArrUpp = strToArr.map(e => e.toUpperCase());

if(strToArr == ' ' || strToArr == '') {
   for( let i = 65; i < 91; i++ ){
     missArr.push(String.fromCharCode(i));
   }
}

strToArr.forEach(function(e) {
  if(missArr.includes(e)) {
    missArr.push(e.toLowerCase());
  } else if(e !== ' '){
    missArr.push(e.toLowerCase());  
    for( let i = e.toUpperCase().charCodeAt(0); i < 91; i++ ){
      missArr.push(String.fromCharCode(i));
    }
  }
                                    
});

return missArr.filter(x => !strToArrUpp.includes(x)).join('');

}

//Rock Off! ---  Task 41

function solve(a, b) {
  
let scoreAlice = 0;
let scoreBob = 0;

for( let i = 0; i < a.length; i++){
  ( a[i] > b[i] ) ? scoreAlice += 1 : ((a[i] < b[i]) ? scoreBob += 1 : 0) ;
}
  
  return scoreAlice > scoreBob ? 
    `${scoreAlice}, ${scoreBob}: Alice made "Kurt" proud!` : 
    (scoreAlice < scoreBob ? `${scoreAlice}, ${scoreBob}: Bob made "Jeff" proud!` : `${scoreAlice}, ${scoreBob}: that looks like a "draw"! Rock on!`);

}



//Tidy Number (Special Numbers Series #9) ---  Task 40

function tidyNumber(n){
  //your code here
 let myIntArr = n.toString().split('').map(function(e){return parseInt(e)});
 let isTrue = true;
 if( myIntArr.length == 1){
   return isTrue;
 }
 for( let i = 0; i < myIntArr.length; i ++ ){
  if(myIntArr[i] > myIntArr[i+1]){
    isTrue = false;
  }
  }
  
 return isTrue;; 
}

//Minimum Steps (Array Series #6) ---  Task 39

function minimumSteps(numbers, value){
  //your code here
  let sum = 0;
  let counter = -1;
  let sortArray = numbers.sort( function(a,b){ return a - b;})
  for( let i = 0; i < sortArray.length; i++){
    sum += sortArray[i];
    counter++;
    if ( sum >= value )
     return counter;
   }    
}

//Refactored Greeting  ---  Task 38

function Person(name) {
  this.name = name;  
  }
  
 Person.prototype.greet = function(yourName){
    return "Hello " + yourName + ", my name is " + this.name;
  }
  
  
  
 //The Deca Tree  ---  Task 37
 

function tree(trunks) {
    this.trunks = trunks;
    this.branches = trunks * 10;
    this.twigs = trunks * 100;
    this.leaves = trunks * 1000;
}

//your methods here...

tree.prototype.chopLeaf = function(n){
  this.leaves = Math.max(this.leaves - n, 0);
}

tree.prototype.chopTwig = function(n){
  this.twigs = Math.max(this.twigs - n, 0);
  this.chopLeaf(n * 10);
}

tree.prototype.chopBranch = function(n){
  this.branches = Math.max(this.branches - n, 0);
  this.chopTwig(n * 10);
}

tree.prototype.chopTrunk = function(n){
  this.trunks = Math.max(this.trunks - n, 0);
  this.chopBranch(n * 10);
}

tree.prototype.describe = function() {
  return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`;
}

//Nth Smallest Element (Array Series #4) ---  Task 36

function nthSmallest(arr, pos){
  //your code here
  function sortArr( a, b ){
    return a - b;
  }
  
  arr.sort(sortArr);
  
  return arr[pos - 1];
  
}

//How long should you cook this for? ---  Task 35


function cookingTime(neededPower, minutes, seconds, power) {
  // Your code here
  var powerUpDown = parseInt(neededPower) / parseInt(power);
  var newTotalSeconds = ((((minutes * 60) + seconds) * powerUpDown));
  var newMinutes = parseInt( newTotalSeconds / 60 );
  var newSeconds = Math.ceil(newTotalSeconds % 60);
  
  return  newSeconds == 60 ? (newMinutes + 1 )+ " minutes " + 0 + " seconds" : newMinutes + " minutes " + newSeconds + " seconds";
}


//Minimize Sum Of Array (Array Series #1) ---  Task 34


function minSum(arr) {
  // your code here
  var minSum = 0;
  var lastElement = arr.length - 1;
  
  function sortArray( a, b ){
    return a - b;
  }

  arr.sort(sortArray);

  for( var i = 0; i < arr.length; i++ ){
  if(i == arr.length / 2) return minSum;
    minSum += arr[i] * arr[lastElement - i];
    
  }
  
  
}

//Find the next perfect square! ---  Task 33

function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  return   sq % Math.sqrt(sq) !== 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)
}


//Can this object fly? Balloons in "Up" and in real life

function Journey(object, crew, balloons) {
  // let the journey begin 
  this.object = object;
  this.crew = crew;
  this.ballons = balloons;
  
  this.isPossible = function() {
      if((this.object.weight + (this.crew * 80)) > (this.ballons * 0.0048)) {
        return false;
      } else {
        return true;
      }
  }  
}


//Coding Meetup #2 - Higher-Order Functions Series - Greet developers ---  Task 32

function greetDevelopers(list) {
  // thank you for checking out my kata :)
  for(var i in list){
	list[i].greeting = "Hi " + list[i].firstName + ", what do you like the most about " 
						+ list[i].language + "?";

  };
  
  return list;
  
}

//Find the stray number ---  Task 31


function stray(numbers) {
  if(numbers[0] !== numbers[1] && numbers[2] == numbers[0]){
    return numbers[1]
  } else if (numbers[0] !== numbers[1] && numbers[2] == numbers[1]){
    return numbers[0]
  } else {
    return numbers.find(function(element){
      return element !== numbers[0];
    });
  }
}


//Convert boolean values to strings 'Yes' or 'No'.


function boolToWord( bool ){
  //...
  return bool ? 'Yes':'No';
}


//The Feast of Many Beasts ---  Task 30


function feast(beast, dish) {
//your function here
return beast.substr(0,1) == dish.substr(0,1) && beast.substr(beast.length - 1, 1) == dish.substr(dish.length - 1, 1);
}


//Calculate average ---  Task 29

function find_average(array) {
  // your code here
  var sum = 0;
  array.forEach( element => sum += element); 
  return sum / array.length;
}


//Are arrow functions odd? ---  Task 28


function odds(values){
  // arrow it
  return values.filter( element => element % 2 !== 0);
}



//Opposite number ---  Task 27


function opposite(number) {
  //your code here
  return -number;
}



//A Strange Trip to the Market ---  Task 26


function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  return s.includes('tree fiddy') || s.includes('3.50');
}



//Remove First and Last Character ---  Task 25


function removeChar(str){
 //You got this!
  return str.substr(1, str.length - 2);
};



//Abbreviate a Two Word Name ---  Task 24


function abbrevName(name){

return name.charAt(0).toUpperCase().concat('.', name.charAt(name.indexOf(' ')+1).toUpperCase());
    
}



//Sum of Multiples ---  Task 23


function sumMul(n,m){

var sumVal = 0;
var inc = n;

  if(m > 0) {
      while( n < m ){
        sumVal = sumVal + n;
        n += inc;
      }
      return sumVal;
      
  } else {
  
      return 'INVALID';
      
  }
}




//Filter out the geese ---  Task 22


function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
 
  // return an array containing all of the strings in the input array except those that match strings in geese
  return  birds.filter(function(element){
      return geese.indexOf(element) === -1 });
};



//Sentence Smash ---  Task 21

function smash (words) {
    "use strict";
    return words.join(' ');
    
};


//For Twins: 1. Types ---  Task 20

function typeValidation(variable, type) {
  // Your code should be here ;) 
  return typeof(variable) === type;
}



//Sum Arrays ---  Task 19


function sum (numbers) {
    "use strict";
    
    return numbers.reduce( 
    (acumulator, initialValue) =>  acumulator + initialValue, 0
    )
    
    
    
    
};



// Sum Numbers ---  Task 18


function sum (numbers) {
    "use strict";
    
    let sumOfElements = 0;    
    numbers.forEach(element =>
      sumOfElements += element );
    return sumOfElements;
    
};



//Stanton measure ---  Task 17

/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/

function stantonMeasure(myArray){

    let counterOnes = 0;
    let foundNumberCounter = 0;

    myArray.forEach(element => {
        if(element === 1){
            counterOnes++
        }
    });

    myArray.forEach(element => {
        if(element === counterOnes) {
            foundNumberCounter++;
            }
        });

    return foundNumberCounter;

}



//Find the missing letter ---  Task 16


function findMissingLetter(array)
{
    var stringArr = array.toString().replace(/,/g, '');
    var arrayCodeAt = [];
    for ( var i = 0; i < stringArr.length; i++ ) {

        arrayCodeAt.push(stringArr.charCodeAt(i));

    }

    for (var i = 0; i < arrayCodeAt.length - 1; i++ ){

        if ( arrayCodeAt[i] !== arrayCodeAt[i + 1] - 1) {

            return String.fromCharCode(arrayCodeAt[i + 1] - 1);
        }

    }

}



//String repeat ---  Task 15


function repeatStr (n, s) {
  return s.repeat(n);
}



//Find the first non-consecutive number ---  Task 14


function firstNonConsecutive (arr) {
    for ( var i = 0; i < arr.length - 1; i++ ){
        if( !(arr[i] == (arr[i+1] - 1 ) ) ){
            return arr[i+1];
        } 
    }
    return null;

}



//Dollars and Cents


function formatMoney(amount){
  // your formatting code here
  return '$'+parseFloat(amount).toFixed(2);
}




//Who likes it? ---  Task 13


function likes(names) {
  // TODO
  if ( names.length === 0 ){
    return 'no one likes this';
  }
  else if ( names.length === 1){
    return  names[0] + ' likes this';
  }else if (names.length === 2){
    return names[0] + ' and ' + names[1] + ' like this';
  }  else if( names.length === 3 ){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  }else{
      var namesRest  = names.length - 2;
      return names[0] + ', ' + names[1] + ' and ' +  namesRest + ' others like this';
    
  }
  
}



//Simple Fun #10: Range Bit Counting ---  Task 12


function rangeBitCount(a, b) {
  //coding and coding..  
   var sum = 0;
    for (var i = a; i <= b; i++){
        sum += i.toString(2).replace(/0/g, '').length;
    }
    
    return sum;

}
  



//Two Oldest Ages ---  Task 11


// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    var sortArr = ages.map(Number).sort(function (a, b) {  return a - b;  });
    var scoreTab = [sortArr[sortArr.length - 2], sortArr[sortArr.length - 1]];
    return scoreTab;
}



//Simple Fun #69: Are Equally Strong? ---  Task 10


function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  //coding and coding..
  return ((yourLeft == friendsLeft) && (yourRight == friendsRight)) || 
         ((yourLeft == friendsRight) && (yourRight == friendsLeft)) ;
  
}




//Does my number look big in this?---  Task 9


function narcissistic( value ) {
      // Code me
    var valToString = value.toString().split('');
    var lengthValue = valToString.length;
    var sumEq = 0;

    for ( var i = 0; i < lengthValue; i++){

        sumEq += Math.pow(parseInt(valToString[i]), lengthValue);

    }

    if (value == sumEq){
      return true;
      } else {
      return false;
      }

}



//Two to One ---  Task 8


function longest(s1, s2) {
 
 return Array.from(new Set(s1.split("").concat(s2.split("")).sort())).join("");

}



//Binary Addition ---  Task 7


function addBinary(a,b) {
  var result = a + b;
  var binaryResult = '';
  
  
  while ( result > 0 ){
  
    if ( result % 2 == 0){
        binaryResult = binaryResult.concat(0);
    } else if ( result % 2 !== 0) {
        binaryResult = binaryResult.concat(1);
    }
    
    result = Math.floor( result / 2 );
  
  }
  
    return binaryResult.split("").reverse().join("");
  
}



//Is a number prime? ---  Task 6


function isPrime(num) {
  //TODO
  for (var i = 2; i < num; i++){
    if(num % i == 0){
      return false;
      }
    
  }
  return num >= 2
}


function isPrime(num) {
  //TODO
for ( var i = 2; i < num; i++ ){
  if ( num % i == 0) {
    return false;  
}
}

return num >= 2;

}



//Regex validate PIN code ---  Task 5


function validatePIN (pin) {
  //return true or false
  return /^(\d{4}|\d{6})$/.test(pin)
}
1 year agoRefactor
function validatePIN (pin) {
  //return true or false
  
 if ( pin.length == 4 || pin.length == 6) {
   var expr = /\D/g;
     if ( pin.search(expr) == -1){;
       return true;
     } else {
       return false;
       }
 } else {
   return false;
 }

}



//Tribonacci Sequence ---  Task 4


function tribonacci(signature,n){
  //your code here
  var tribArr = [];
  Array.prototype.push.apply(tribArr, signature);
  
  if ( n < 3){
  
      return tribArr.splice(n-1, n);
      
  } else {
  
    for ( var i = 3; i < n; i++){
      tribArr[i] = tribArr[i - 1] + tribArr[i - 2] + tribArr[i - 3];
      
    }
  }
  //tribArr = Array.prototype.push.apply(tribArr, tribArr );
  
  return tribArr;
  
}



//Highest and Lowest ---  Task 3


function highAndLow(numbers){
  // ...
    var parseTakeAllNumb = [];
    var takeAllNumb = numbers.match(/\S\w*/g);
    var maxNumb = 0;
    var minNumb = 0;

    for (var x in takeAllNumb){
       parseTakeAllNumb.push(parseInt(takeAllNumb[x]));
    }
    
    maxNumb = Math.max.apply(null, parseTakeAllNumb);
    minNumb = Math.min.apply(null, parseTakeAllNumb);
    
    return maxNumb + ' ' + minNumb;
  
  
 }


//Remove String Spaces ---  Task 2


function noSpace(x){
  return x.replace(/\s/g,"");
}
1 year agoRefactor
function noSpace(x){
  var stringNoSpace = '';
  for ( var i = 0; i < x.length; i++) {
    if ( x[i] !== ' '){
        stringNoSpace += x[i];
    } 
  }
    
    return stringNoSpace;
  }



//Multiply ---  Task 1

function multiply(a, b){
 return a * b
}
