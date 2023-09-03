// function addNumbers(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNumbers(3, 5));
// console.log(addNumbers(60, 50));

// function findMax(num1, num2) {
//   if (num1 > num2) {
//     return `${num1} is greater than ${num2}`;
//   } else if (num1 < num2) {
//     return `${num2} is greater than ${num1}`;
//   } else {
//     return "Both are equal";
//   }
// }

// function compute(num1, num2, operation) {
//   switch (operation) {
//     case "add":
//       return num1 + num2;

//     case "subtract":
//       return num1 - num2;

//     case "multiply":
//       return num1 * num2;

//     case "divide":
//       return num1 / num2;
//   }
// }

function compute(num1, num2, operation) {
  function add(num1, num2) {
    return num1 + num2;
  }
  function subtract(num1, num2) {
    return num1 - num2;
  }
  function multiply(num1, num2) {
    return num1 * num2;
  }
  function divide(num1, num2) {
    return num1 / num2;
  }

  switch (operation) {
    case "add":
      return add(num1, num2);

    case "subtract":
      return subtract(num1, num2);

    case "multiply":
      return multiply(num1, num2);

    case "divide":
      return divide(num1, num2);
  }
}

console.log(compute(1, 3, "add"));
console.log(compute(1, 3, "subtract"));
console.log(compute(1, 3, "multiply"));
console.log(compute(1, 3, "divide"));

var globalVar = "global";

const squareNumber = (number) => {
  number * number;
  console.log(globalVar);
  var localVar = "local";
};

squareNumber(20);

console.log(localVar);
