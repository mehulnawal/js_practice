// if statements 
function ifStatements() {

    // check if a number is positive
    function Q1() {
        let num = prompt("Enter a number: ");

        if (num >= 0) {
            console.log("The number is positive");
        }
    }

    // check if the user can vote or not
    function Q2() {
        let age = prompt("Enter your age: ");

        if (age >= 18) {
            console.log(`The user can vote as his age is ${age}`);
        }
    }

    // check if the string is uppercase or not
    function Q3() {
        let char = prompt("Enter a char: ");

        if (char >= "A" && char <= "Z") {
            console.log("The char is uppercase");
        }
    }

    // Print even if divisible by 2
    function Q4() {
        let num = prompt("Enter your number: ");

        if (num % 2 == 0) {
            console.log(`${num} is Even number`);
        }
    }

    // check if the number is greater than 100
    function Q5() {
        let num = prompt("Enter your number: ");

        if (num > 100) {
            console.log(`${num} is more than 100`);
        }
    }

    // check if the first letter of string is A
    function Q6() {
        let str = prompt("Enter your string: ");

        if (str[0] == "A") {
            console.log("Yes");
        }
    }

    // check if the number is multiple of 5
    function Q7() {
        let num = prompt("Enter your number: ");

        if (num % 5 == 0) {
            console.log(`${num} number is multiple of 5`);
        }
    }

    // print welcome if the entered password is correct
    function Q8() {
        let pass = prompt("Enter your password");

        let correctPass = "hello";

        if (pass == correctPass) {
            console.log("Welcome");
        } else {
            console.log("Get lost");
        }
    }

    // check if it is leap year
    function Q9() {
        let num = prompt("enter your leap: ");

        if (num % 4 == 0) {
            console.log(`${num} is leap year `);
        }
    }

    // check the temperature is above 30 and print it's hot
    function Q10() {
        let num = prompt("Enter your number: ");

        if (num > 30) {
            console.log(`It is hot`);
        }
    }
}

// if-else statement 
function ifElseStatements() {

    // check if the number is even or odd
    function Q1() {

        let num = prompt("Enter your number: ");

        if (num % 2 == 0) {
            console.log(`${num} The number is even`);
        }
        else {
            console.log(`${num} The number is odd`);
        }

    }

    // compare two number and print the greater one 
    function Q2() {

        let num1 = prompt("Enter number1: ");

        let num2 = prompt("Enter number2: ");

        if (num1 > num2) {
            console.log(`${num1} is greater than ${num2}`);
        }
        else {
            console.log(`${num2} is greater than ${num1}`);
        }

    }

    // check if the character is vowel or consonant 
    function Q3() {

        let char1 = prompt("Enter your character: ");

        if (char1 == 'a' || char1 == 'e' || char1 == 'i' || char1 == 'o' || char1 == 'u' || char1 == 'A' || char1 == 'E' || char1 == 'I' || char1 == 'O' || char1 == 'U') {
            console.log(`${char1} is vowel`);
        }
        else {
            console.log(`${char1} is consonant`);
        }

    }

    // check the user-provided password is correct or not
    function Q4() {
        let password = prompt("Enter your password: ");

        correctPassword = 'hello';

        if (password == correctPassword) {
            console.log("Your password is correct");
        }
        else {
            console.log("Your password is not correct");
        }
    }

    // check if the person is eligible for license or not 
    function Q5() {
        let age = prompt("Enter your age: ");

        if (age >= 18) {
            console.log("Eligible");
        }
        else {
            console.log("Not Eligible");
        }
    }

    // check number is +ve or -ne
    function Q6() {
        let num = prompt("Enter your number: ");

        if (num >= 0) {
            console.log(`${num} is +ve`);
        } else {
            console.log(`${num} is -ve`);
        }

    }

    // check if the person is adult or minor
    function Q7() {
        let age = prompt("Enter your age: ");

        if (age >= 18) {
            console.log("Adult");
        }
        else {
            console.log("Minor");
        }
    }

    // check if the string i empty or not
    function Q8() {
        let str = prompt("Enter your string: ");

        if (str == "") {
            console.log("String is empty");
        }
        else {
            console.log("String is not empty");
        }
    }

    // check if fail if less than 40 or pass 
    function Q9() {
        let marks = prompt("Enter your marks: ");

        if (marks >= 40) {
            console.log("PASS");
        }
        else {
            console.log("FAIL");
        }
    }

    // check if day i Saturday or not and print weekend if it is
    function Q10() {
        let day = prompt("Enter your day: ");

        if (day == "Saturday" || day == "saturday") {
            console.log("Enjoy! It's Weekend");
        }
        else {
            console.log("Go to work! No Weekend");
        }
    }

}

// nested if-else statements
function nestedIfElseStatements() {
    function Q() { }

    // check if number is +ve or -ve or zero
    function Q1() {
        let num = prompt("Enter your number: ");

        if (num > 0) {
            console.log(`${num} is +ve`);

        }
        else {
            if (num < 0) {

                console.log(`${num} is -ve`);
            }
            else {
                console.log(`${num} is equal to 0`);
            }
        }
    }

    // determine wether the year is leap year or not 
    function Q2() {
        let year = prompt("Enter your year: ");

        if (year > 0) {
            if (year % 4 == 0) {
                console.log(`${year} is a leap year`);
            }
            else {
                console.log(`${year} is not a leap year`);
            }
        }
        else {
            console.log(`Enter a number above 3`);
        }
    }

    // classify child's age group child (0-12), teen(13-19), adults (20+)
    function Q3() {
        let age = prompt("Enter your age: ");

        if (age > 0) {
            if (age <= 12) {
                console.log(`${age} is a child`);
            }
            else {
                if (age > 12 && age <= 19) {
                    console.log(`${age} is a teen`);
                }
                else {
                    console.log(`${age} is a adult`)
                }
            }
        }
        else {

        }
    }

    // classify the type of triangle 
    function Q4() {
        let a1 = prompt("Enter the value of angle 1: ");

        let a2 = prompt("Enter the value of angle 2: ");

        let a3 = prompt("Enter the value of angle 3: ");

        if (a1 >= 0 && a2 >= 0 && a3 >= 0) {
            if (a1 == a2 && a1 == a3) {
                console.log("All Sides are equal. Equivalent triangle");
            }
            else {
                if (a1 != a2 && a1 != a3) {
                    console.log("No Sides are equal. Scalene triangle");
                }
                else {
                    console.log("Two Sides are equal. Equivalent isosceles");
                }
            }
        }
        else {
            console.log("Sides must be more than 0");
        }
    }

    // check student is failed, passed, or got distinction based on marks
    function Q5() {

        // marks > 0 

        let marks = prompt("Enter your marks: ");

        if (marks >= 0 && marks <= 100) {
            if (marks <= 30) {
                console.log("Student is fail");
            }
            else {
                if (marks > 30 && marks <= 50) {
                    console.log("Student is passed")
                }
                else {
                    console.log("Student is passed with distinction")
                }
            }
        }
    }

    // determine whether the char is uppercase, lowercase or a digit
    function Q6() {
        let char = prompt("Enter your character: ");

        if (char >= 'A' && char <= 'Z') {
            console.log(`${char} is uppercase`);
        }
        else {
            if (char >= 'a' && char <= 'z') {
                console.log(`${char} is lowercase`);
            }
            else {
                console.log(`${char} is a digit or special character`);
            }
        }
    }

    // number is divisible by 3 and 5 both, only 3 or only 5
    function Q7() {
        let num = prompt("Enter your number: ");

        if (num >= 0) {
            if (num % 3 == 0 && num % 5 == 0) {
                console.log(`${num} is divisible by both 3 and 5`);
            }
            else {
                if (num % 3 == 0) {
                    console.log(`${num} is divisible by only 3`);
                }
                else {
                    console.log(`${num} is divisible by only 5`);
                }
            }
        }
    }

    // determine largest of 3 numbers
    function Q8() {
        let num1 = prompt("Enter your number 1: ");
        let num2 = prompt("Enter your number 2: ");
        let num3 = prompt("Enter your number 3: ");

        if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
            if (num1 > num2 && num1 > num3) {
                console.log(`${num1} is largest. Num1`);
            }
            else {
                if (num2 > num3) {
                    console.log(`${num2} is largest. Num2`);
                }
                else {
                    if (num3 > num1 && num3 > num2) {
                        console.log(`${num3} is largest. Num3`);
                    }
                    else {
                        console.log("All numbers are equal");
                    }
                }
            }
        }
        else {
            console.log("Enter number above 0");
        }
    }

    // check grade of student based on marks - A (90+) , B (80-89) , C(70- 79), D(60-69) , Fail ( <60)
    function Q9() {
        let marks = prompt("Enter your marks: ");

        if (marks >= 0 && marks <= 100) {
            if (marks >= 90) {
                console.log("A");
            }
            else {
                if (marks >= 80 && marks <= 89) {
                    console.log("B");
                }
                else {
                    if (marks >= 70 && marks <= 79) {
                        console.log("C");
                    }
                    else {
                        if (marks >= 60 && marks <= 69) {
                            console.log("D");
                        }
                        else {
                            console.log("Fail");
                        }
                    }
                }
            }
        }
        else {
            console.log("Enter marks above 0 and below 100");
        }
    }

    // check if person is eligible for loan based on credit score
    function Q10() {
        let creditScore = prompt("Enter your credit score: ");

        if (creditScore >= 0) {
            if (creditScore >= 0 && creditScore <= 20) {
                console.log("No loan");
            }
            else {
                if (creditScore >= 20 && (creditScore <= 40)) {
                    console.log("Loan upto Rs. 15000");
                }
                else {
                    if (creditScore >= 40 && creditScore <= 60) {
                        console.log("Loan upto Rs. 25000");
                    }
                    else {
                        if (creditScore >= 60 && (creditScore <= 80)) {
                            console.log("Loan upto Rs. 35000");
                        }
                        else {
                            console.log("Loan upto Rs.50000 Max loan");
                        }
                    }
                }
            }
        }
        else {
            console.log("CIBIL score must be above 0 ");
        }
    }
}