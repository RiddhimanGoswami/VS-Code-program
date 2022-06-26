console.log("hello from javascript")
var number = 5; // in-line comment
/* this is a 
multi line comment */
/* Data types:
undefined, null, boolean, string, symbol, number and object
*/
var myName = "Riddhiman"
console.log(myName)
myName = 19
console.log(myName)
let ourName = "Cooder"
const pi = 3.14
console.log(ourName)
console.log(pi)
//changing variables
var a;
var b = 2;
console.log(a)
console.log(b)
a=7;
b=a;
console.log(a)
console.log(b)
//Iniatialize these 3 variables
var a = 5;
var b = 10;
var c = "I am a ";
//Do not change code below this line
a = a + 5;
b = b + 10;
c = c + "String!";
console.log(a)
console.log(b)
console.log(c)
var sum = 10 + 10;
console.log(sum)
var difference = 45 - 33;
console.log(difference)
var product = 8 * 10;
console.log(product)
var quotient = 66 /10
console.log(quotient)
var myVar = 87;
myVar ++;
console.log(myVar)
var myVar = 11;
myVar --;
console.log(myVar)
var remainder;
remainder = 11 % 3
console.log(remainder)
var a = 3;
var b = 17;
var c = 12;
//Only modify code below this line
a += 12;
b += 9;
c += 7;
console.log(a)
console.log(b)
console.log(c)
var a = 11;
var b = 9;
var c = 3;
//Only modify code below this line
a -= 6;
b -= 15;
c -= 1;
console.log(a)
console.log(b)
console.log(c)
var a = 5;
var b = 12;
var c = 4.6;
//Only modify code below this line
a *= 5;
b *= 3;
c *= 10;
console.log(a)
console.log(b)
console.log(c)
var a = 48;
var b = 108;
var c = 33;
//Only modify code below this line
a /= 12;
b /= 4;
c /= 11;
console.log(a)
console.log(b)
console.log(c)
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)
var myStr = '"I am a "double quoted" string inside "single quotes"';
console.log(myStr)
/*****
 * \' single quote
 * \" double quote
 * \\ backslash
 * \n new line
 * \r carriage return
 * \t tab
 * \b backspace
 * \f formfeed
 *****/
var myStr = "first line\n\t\\Second line\nthird line";
console.log(myStr)
var ourStr = "I came first" + " I came second";
console.log(ourStr)
//Example
var ourStr = "i came first. ";
ourStr += "i came second";
console.log(ourStr)
//Example
var ourname = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?"
console.log(ourStr)
var andAdjective = "aswome !";
var ourStr = "freeCodecamp is ";
ourStr += andAdjective;
console.log(ourStr)
var firstnamelengtn = 0;
var firstname = "Riddhiman";
firstnamelengtn = firstname.length
console.log(firstnamelengtn)
var firstletteroffirstname = "";
var firstname = "Riddhiman"
firstletteroffirstname = firstname[0]
console.log(firstletteroffirstname)
//Example
var firstname = "Riddhi";
var secondletter = firstname[1];
var thirdletter = firstname[2];
console.log(secondletter);
console.log(thirdletter);
//Example
var firstname = "Riddhi";
var lastletteroffirstname = firstname[firstname.length - 1]
console.log(lastletteroffirstname);
function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    //Your code below this line
    var result = "";
    result += "the " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    //Your code below this line
    return result;
}
//Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
//Example
var ourArray = ["Jhon",23];
console.log(ourArray)
var ourArray = [["the universe", 42], ["everything", 101010]];
console.log(ourArray)
//Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; //equals 50
console.log(ourData)
//Example
ourArray = [18,64,99];
ourArray[1] = 45; // ourarray is now equals [18,45,99]
console.log(ourArray)
//Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13, 14 ]]
//only change code below this line
var myData = myArray[2][1];
console.log(myData)
//Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray)
//Example 
var ourArray = [1,2,3];
var removedFromOurarray = ourArray.pop();
console.log(ourArray)
//Example
var ourArray = [1,2,3];
var removedFromOurarray = ourArray.shift();
console.log(ourArray)
//Example
var ourArray = [1,2,3];
ourArray.shift();
ourArray.unshift("happy");
console.log(ourArray)
var mylist = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]
console.log(mylist)