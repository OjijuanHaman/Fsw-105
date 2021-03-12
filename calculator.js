var readlineSync = require('readline-sync');
var numOne = readlineSync.questionInt(" Enter first number: ");
var numTwo = readlineSync.questionInt(" Enter second number: ");
var enterOp = readlineSync.question("What operation needs to be preformed?: add, sub, mul, div ");

function addNumbers(num1,num2){
    return (num1 + num2);
}
function subNumbers(num1,num2){
    return (num1 - num2);
}
function mulNumbers(num1,num2){
    return (num1 * num2);
}
function divNumbers(num1,num2){
    return (num1 / num2);
}

function calculator(number1, number2, operation){
    if (operation =="add"){
        console.log ("The numbers sum is: " + addNumbers(number1, number2));
    }
    else if (operation == "sub"){
        console.log ("The numbers difference is: " + subNumbers(number1, number2));
    }
    else if (operation == "mul"){
        console.log ("The numbers product is: " + mulNumbers(number1, number2));
    }
    else if (operation == "div"){
        console.log ("The numbers quotient is: " + divNumbers(number1, number2));
    }
    else {
        console.log ("Operation not recognized please try again")
    }
}

calculator(numOne, numTwo, enterOp );






