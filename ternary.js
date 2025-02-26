// ternary operator
function ternaryOperator() {
    // 1. even or odd
    function Q1() {
        let num = 0;
        (num % 2 == 0) ? console.log("number is even") : console.log("number is odd");

    };

    // 2. max between two number
    function Q2() {
        let num1 = 12;
        let num2 = -13;

        (num1 > num2) ? console.log("num1 is bigger") : console.log("num2 is bigger");
    };

    // 3. if a person is eligible to vote
    function Q3() {
        let age = 150;

        (age >= 0 && age <= 150) ? (age >= 18) ? console.log("can vote") : console.log("cannot vote") : console.log("Enter correct age");
    };

    // 4. Use the ternary operator to find the absolute value of a number.
    function Q4() {
        let num = -12;

        (num < 0) ? console.log(`${num * -1}`) : console.log(`${num}`);

    }

    // 5. assign grades
    function Q5() {

        let marks = 120;

        (marks >= 0 && marks <= 100)
            ? (marks >= 90) ? console.log("A")
                : (marks >= 80 && marks < 90) ? console.log("B")
                    : (marks >= 70 && marks < 80) ? console.log("C")
                        : (marks >= 60 && marks < 70) ? console.log("D")
                            : console.log("Fail") : console.log("Enter correct marks")

    }

    // 6. smallest of 3 numbers 
    function Q6() {
        let num1 = 12;
        let num2 = 14;
        let num3 = 16;

        (num1 >= 0 && num2 >= 0 && num3 >= 0)
            ? (num1 > num2 && num1 > num3) ? console.log("Num1 is bigger")
                : (num2 > num3) ? console.log("Num2 is bigger")
                    : console.log("num3 is bigger") : console.log("Enter number2 above 0")
    }

    // 7. leap year 
    function Q7() {
        let year = 2000;

        (year >= 0) ? ((year % 4 == 0 || year % 100 != 0) && (year % 4 == 0)) ? console.log("It is year leap") : console.log("It is not a year leap")
            : console.log("Enter year above 0");

    }

    // 8. determine whether the character is consonant or vowel
    function Q8() {
        let char = 'a';

        ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
            ? (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') ? console.log("It is vowel") : console.log("It is consonant") : console.log("Enter char between a and z");

    }

    // 9. Implement a ternary operator that checks if a number is positive, negative, or zero.
    function Q9() {
        let num = 12;

        (num > 0) ? console.log("+ve") : (num < 0) ? console.log("-ve")
            : console.log("Equal to 0")

    }

    // 10. Convert a given numerical day (1-7) into a string representing the day of the week using the ternary operator.

    function Q10() {
        let day = 7;

        (day > 0 && day <= 7)
            ? (day == 1) ? console.log("Monday")
                : (day == 2) ? console.log("Tuesday")
                    : (day == 3) ? console.log("Wednesday")
                        : (day == 4) ? console.log("Thursday")
                            : (day == 5) ? console.log("Friday")
                                : (day == 6) ? console.log("Saturday")
                                    : console.log("Sunday") : console.log("Enter number between 1 - 7 only")

    }
};

// switch case 
function switchCase() {

    // 1. Use a switch case to print the day of the week when given a number (1-7).
    function Q1() {
        let num = 4;

        switch (num) {

            case 1:
                console.log("Monday");
                break;

            case 2:
                console.log("Tuesday");
                break;

            case 3:
                console.log("Wednesday");
                break;

            case 4:
                console.log("Thursday");
                break;

            case 5:
                console.log("Friday");
                break;

            case 6:
                console.log("Saturday");
                break;

            case 7:
                console.log("Sunday");
                break;

            default:
                console.log("Enter number between 1 - 7");
                break;
        }
    };

    // 2. Create a switch case to check for vowels (a, e, i, o, u).
    function Q2() {
        let char = 'ewe';

        switch (char >= 'a' && char <= 'z') {
            case true:
                switch (char) {

                    case 'a':
                        console.log("Vowel");
                        break;

                    case 'e':
                        console.log("Vowel");
                        break;

                    case 'i':
                        console.log("Vowel");
                        break;

                    case 'o':
                        console.log("Vowel");
                        break;

                    case 'u':
                        console.log("Vowel");
                        break;

                    default:
                        console.log("Consonant");

                }
                break;
            default:
                console.log("Enter char between a - z")
                break;
        }

    };

    // 3. Write a switch case to perform basic arithmetic operations (+, -, *, /).
    function Q3() {

        let option = '%';
        let num1 = 12, num2 = 1;

        switch (option == '+' || option == '-' || option == '*' || option == '/') {
            case true:
                switch (option) {
                    case '+':
                        console.log(`${num1} + ${num2} = ${num1 + num2}`);
                        break;

                    case '-':
                        console.log(`${num1} - ${num2} = ${num1 - num2}`);
                        break;

                    case '*':
                        console.log(`${num1} * ${num2} = ${num1 * num2}`);
                        break;

                    case '/':
                        console.log(`${num1} / ${num2} = ${num1 / num2}`);
                        break;

                }
                break

            default:
                console.log("Enter correct option ");
        }

    };

    // 4. Use a switch case to display the number of days in a given month (1-12).
    function Q4() {
        let num = 4;

        switch (num) {

            case 1:
                console.log("Jan");
                break;

            case 2:
                console.log("Feb");
                break;

            case 3:
                console.log("March");
                break;

            case 4:
                console.log("April");
                break;

            case 5:
                console.log("May");
                break;

            case 6:
                console.log("June");
                break;

            case 7:
                console.log("July");
                break;

            case 8:
                console.log("Aug");
                break;

            case 9:
                console.log("Spt");
                break;

            case 10:
                console.log("Oct");
                break;

            case 11:
                console.log("Nov");
                break;

            case 12:
                console.log("Dec");
                break;

            default:
                console.log("Enter number between 1 - 12");
                break;
        }
    };

    // 5. Implement a switch case to convert marks (0-100) into letter grades (A, B, C, D, F).
    function Q5() {
        let marks = 92, grade;

        (marks >= 90 && (grade = 'A'));
        ((marks >= 80 && marks < 90) && (grade = 'B'));
        ((marks >= 70 && marks < 80) && (grade = 'C'));
        ((marks >= 60 && marks < 70) && (grade = 'D'));
        ((marks >= 50 && marks < 60) && (grade = 'E'));
        ((marks < 50) && (grade = 'F'));


        switch (marks >= 0 && marks <= 100) {
            case true:
                switch (grade) {
                    case 'A':
                        console.log("A");
                        break;

                    case 'B':
                        console.log("B");
                        break;

                    case 'C':
                        console.log("C");
                        break;

                    case 'D':
                        console.log("D");
                        break;

                    case 'E':
                        console.log("E");
                        break;

                    case 'F':
                        console.log("FAIL");
                        break;
                }
                break;
            default:
                console.log("Enter correct marks");
                break;
        }

    };

    // 6. Write a switch case to determine whether a given character is an uppercase letter, lowercase letter, digit, or special character
    function Q6() {
        let input = '90', value;

        ((input >= 'a' && input <= 'z') && (value = "L"));
        ((input >= 'A' && input <= 'Z') && (value = "U"));
        ((input == '!' || input == '@' || input == '#') && (value = "S"));
        ((input >= 0 && input <= 9) && (value = "D"));

        switch (input != "") {
            case true:

                switch (value) {
                    case 'L':
                        console.log("Lowercase");
                        break;

                    case 'U':
                        console.log("Uppercase");
                        break;

                    case 'S':
                        console.log("Special characters");
                        break;

                    case 'D':
                        console.log("Digit");
                        break;
                };
                break;

            default:
                console.log("Enter correct value");
                break;
        }
    };

    // 7. Implement a switch case that converts a numerical month (1-12) into the corresponding season.
    function Q7() {
        let num = 10;

        switch (num) {

            case 1:
                console.log("Winter");
                break;

            case 2:
                console.log("Winter");
                break;

            case 3:
                console.log("Summer");
                break;

            case 4:
                console.log("Summer");
                break;

            case 5:
                console.log("Summer");
                break;

            case 6:
                console.log("Monsoon");
                break;

            case 7:
                console.log("Monsoon");
                break;

            case 8:
                console.log("Monsoon");
                break;

            case 9:
                console.log("Monsoon");
                break;

            case 10:
                console.log("Autumn");
                break;

            case 11:
                console.log("Autumn");
                break;

            case 12:
                console.log("Winter");
                break;

            default:
                console.log("Enter number between 1 - 12");
                break;
        }
    };

    // 8. Create a switch case to simulate a basic menu-driven program (e.g., ATM options: Withdraw, Deposit, Check Balance).
    function Q8() {

        let currentBalance = 12000;

        console.log("\nATM OPtions - ");
        console.log("1. Withdraw- ");
        console.log("2. Deposit - ");
        console.log("3. Check balance - \n");

        let option = 3;

        switch ((option >= 1 && option <= 3)) {
            case true:

                switch (option) {

                    case 1:
                        let WithdrawAmt = 1000;
                        console.log(`WithdrawAmt - ${WithdrawAmt} `);
                        currentBalance -= WithdrawAmt;
                        break;

                    case 2:
                        let depositAmt = 1000;
                        console.log(`Deposited - ${depositAmt} `);
                        currentBalance += depositAmt;
                        break;

                    case 3:
                        console.log(`Current balance - ${(currentBalance - WithdrawAmt) + depositAmt} `);
                        break;
                }
                break;

            default:
                console.log("Enter correct option");
                break;
        }


    }

    // 9. Use a switch case to determine whether a triangle is Equilateral, Isosceles, or Scalene based on its side lengths.
    function Q9() {
        let s1 = 12
            , s2 = 12
            , s3 = 12
            , triangle;

        ((s1 == s2 && s1 == s3) && (triangle = 'E'));
        ((s1 != s2 && s1 != s3) && (triangle = 'S'))

        switch ((s1 >= 0 && s2 >= 0 && s3 >= 0)) {

            case true:
                switch (triangle) {
                    case 'E':
                        console.log("Equilateral triangle");
                        break;

                    case 'S':
                        console.log("Scalene triangle");
                        break;

                    default:
                        console.log("Isosceles triangle");
                        break;
                }
                break;

            default:
                console.log("Enter correct value");
                break;
        }

    }

    // 10. Implement a switch case to evaluate a calculator - like system that supports multiple operations(+, -, *, /, %, ^ for power, and sqrt for square root).
    function Q10() {

        let option = '+';
        let num1 = 12, num2 = 1;

        switch (option == '+' || option == '-' || option == '*' || option == '/' || option == '^' || option == '%' || option == 'sqrt') {
            case true:
                switch (option) {
                    case '+':
                        console.log(`${num1} + ${num2} = ${num1 + num2}`);
                        break;

                    case '-':
                        console.log(`${num1} - ${num2} = ${num1 - num2}`);
                        break;

                    case '*':
                        console.log(`${num1} * ${num2} = ${num1 * num2}`);
                        break;

                    case '/':
                        console.log(`${num1} / ${num2} = ${num1 / num2}`);
                        break;

                    case '%':
                        console.log(`${num1} % ${num2} = ${num1 % num2}`);
                        break;

                    case '^':
                        console.log(`${num1} ^ ${num2} = ${num1 ^ num2}`);
                        break;

                    case 'sqrt':
                        console.log(`Sqrt of ${num1} = ${Math.sqrt(num1)}`);
                        break;

                }
                break

            default:
                console.log("Enter correct option ");
        }
    };

    Q8();

};
