var name = "Hilal";
alert(name);

var age = 22;
let lastName = "Feld";
const DOB = 2000;

console.log(age);
console.log(lastName);
console.log(DOB);

age = 23;
lastName = "Feld2";

console.log(age);
console.log(lastName);
console.log(DOB);

console.log(typeof "This is a text");
console.log(typeof true);
console.log(typeof false);
console.log(typeof 1215);
console.log(typeof "999");
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof undefined);

var carName = "Ford";
var newModel = true;
var plateNum = 12345678;
var seats = ["Front seats", "Back seats"];
var nationality = "British";
var owner = {
  name: "Henry",
  age: 25,
  carLover: undefined,
  license: null,
};

console.log(carName, typeof carName);
console.log(newModel, typeof newModel);
console.log(plateNum, typeof plateNum);
console.log(seats, typeof seats);
console.log(nationality, typeof nationality);
console.log(owner, typeof owner);

var myText = "Hello World!";
var myText1 = "Hello World!";
var myText2 = `Hello World!`;

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote = "This is my text using single quotations ${counter} times";
const doubleQuote = "This is my text using double quotations ${counter} times";
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;

console.log(counter);
console.log(backtick);
console.log(singleQuote);
console.log(doubleQuote);
console.log(tryThisAlso);

console.log("The (counter) variable is of type number.");
console.log(
  "The (backtick) variable uses the backticks to be able to add the value of\
   the (counter) variable inside it's string using it's notation ${counter}"
);

console.log(
  "Both the (singleQuote) and (doubleQuote) variables cannot log the value of the (counter) variable,\
   since for this notation to work, ${counter}, the backticks should be used. However, there is no difference\
    between using any of them, it is back to the developers to choose what suits them better."
);

console.log(
  "The (tryThisAlso) variable uses the backticks. Instead of ${counter},\
   a ${2 + 3} code used, where it's result is 5 on the console as you see."
);

var string1 = "Hello ";
var string2 = "World!";
var result;

console.log((result = string1 + string2));

var num = 3;
var name = "Sam";
var name1 = ["Sam"];
var num2 = 3;
var num3 = "3";
var num4 = 4;
console.log(num === name);
console.log(num === num2);

console.log(num !== num2);
console.log(num2 !== name);

console.log(num == num3);
console.log(name == name1);

console.log(num != num3);
console.log(name != num);

console.log(num > num2);
console.log(num4 > num3);
console.log(num4 > num2);

console.log(num >= num2);
console.log(num >= num3);

console.log(num3 < num);
console.log(num4 < num);

console.log(num <= num3);
console.log(num <= num4);

var result0 = 5 + 3 * 2;
console.log(result0);

var result1 = 10 / 2 + 3;
var result2 = 10 / (2 + 3);

console.log(result1, result2);

console.log(
  "The result of result1 is 8, since the priority between division and addition\
   goes for division, so 10 / 2 is 5 add 3 the result will be 8."
);

console.log(
  "The result of result2 is 2, based on the priorities, the paranthesis has\
   higher priority than the division so (2 + 3) is 5 then 10 / 5 is 2."
);
