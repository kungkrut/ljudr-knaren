var buttons = document.getElementById("buttons");
var firstNumber;
var secondNumber;

buttons.addEventListener("click", handleClick);

function division(firstNumber, secondNumber) {
    return firstNumber/secondNumber;
}

function add(firstNumber, secondNumber) {
    return firstNumber+secondNumber;
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}

function handleClick(event) {
    event.target = event.target
    var element = event.target;

    while (element) {
        if (element.nodeName === "BUTTON") {
            buttonHandler(element);
            break;
        }

        element = element.parentNode;
    }
}

function buttonHandler(button) {
    switch (button) {
        case document.getElementById("zero"):
            firstNumber = secondNumber;
            secondNumber = 0;
            break;
        case document.getElementById("one"):
            firstNumber = secondNumber;
            secondNumber = 1;
            break;
        case document.getElementById("two"):
            firstNumber = secondNumber;
            secondNumber = 2;
            break;
        case document.getElementById("three"):
            firstNumber = secondNumber;
            secondNumber = 3;
            break;
        case document.getElementById("four"):
            firstNumber = secondNumber;
            secondNumber = 4;
            break;
        case document.getElementById("five"):
            firstNumber = secondNumber;
            secondNumber = 5;
            break;
        case document.getElementById("six"):
            firstNumber = secondNumber;
            secondNumber = 6;
            break;
        case document.getElementById("seven"):
            firstNumber = secondNumber;
            secondNumber = 7;
            break;
        case document.getElementById("eight"):
            firstNumber = secondNumber;
            secondNumber = 8;
            break;
        case document.getElementById("nine"):
            firstNumber = secondNumber;
            secondNumber = 9;
            break;
        case document.getElementById("comma"):
            firstNumber = secondNumber;
            secondNumber = 0;
            break;

    }
}
