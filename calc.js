var buttons = document.getElementById("buttons");
var answerField = document.getElementById("answerField");
var firstNumber;
var secondNumber;
var answer = 0;

buttons.addEventListener("click", handleClick);

function division() {
    answer = firstNumber/secondNumber;
}

function add() {
    answer = firstNumber+secondNumber;
}

function subtract(){
    answer = firstNumber-secondNumber;
}
function multiply(){
    answer = firstNumber*secondNumber;
}

function equals(){
    answerField.innerText = answer;
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
        case document.getElementById("add"):
            add();
            break;
        case document.getElementById("subtract"):
            subtract();
            break;
        case document.getElementById("division"):
            division();
            break;
        case document.getElementById("multiply"):
            multiply();
            break;

    }
}
