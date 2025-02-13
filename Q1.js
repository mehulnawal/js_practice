function Q1() {
  // check if a number is positive
  let num = prompt("Enter a number: ");

  if (num > 0) {
    console.log("The number is positive");
  } else {
    console.log("The number is not positive");
  }
}

function Q2() {
  // check if the user can vote or not
  let age = prompt("Enter your age: ");

  if (age >= 18) {
    console.log(`The user cannot vote as his age is ${age}`);
  } else {
    console.log(`The user cannot vote as his age is ${age}`);
  }
}

function Q3() {
  // check if the string is uppercase or not
  let char = prompt("Enter a char: ");

  if (char >= "A" && char <= "Z") {
    console.log("The char is uppercase");
  } else {
    console.log("The char is not uppercase");
  }
}

function Q4() {
  let num = prompt("Enter your number: ");

  if (num % 2 == 0) {
    console.log(`${num} is Even number`);
  } else {
    console.log(`${num} is not Even number`);
  }
}

function Q5() {
  let num = prompt("Enter your number: ");

  if (num > 100) {
    console.log(`${num} is more than 100`);
  } else if (num < 100) {
    console.log(`${num} is less than 100`);
  } else {
    console.log(`${num} is equal to 100`);
  }
}

function Q6() {
  // check if the first letter of string is A
  let str = prompt("Enter your string: ");

  if (str[0] == "A") {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function Q7() {
  let num = prompt("Enter your number: ");

  if (num % 5 == 0) {
    console.log(`${num} number is multiple of 5`);
  } else {
    console.log(`${num} number is not multiple of 5`);
  }
}

function Q8() {
  let pass = prompt("Enter your password");

  let correctPass = "hello";

  if (pass == correctPass) {
    console.log("Welcome");
  } else {
    console.log("Get lost");
  }
}

function Q() {}

function Q9() {
  let num = prompt("enter your leap: ");

  if (num % 4 == 0) {
    console.log(`${num} is leap year `);
  } else {
    console.log(`${num} is not a leap year`);
  }
}

function Q10() {
  let num = prompt("Enter your number: ");

  if (num > 30) {
    console.log(`${num} is very hot`);
  } else {
    console.log(`${num} is not very hot`);
  }
}

Q10();
