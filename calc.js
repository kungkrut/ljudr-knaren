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
var zero = new Audio('ljud/0.wav');
var one = new Audio('ljud/1.wav');
var two = new Audio('ljud/2.wav');
var three = new Audio('ljud/3.wav');
var four = new Audio('ljud/4.wav');
var five = new Audio('ljud/5.wav');
var six = new Audio('ljud/6.wav');
var seven = new Audio('ljud/7.wav');
var eight = new Audio('ljud/8.wav');
var nine = new Audio('ljud/9.wav');
var equals = new Audio('ljud/lika med.wav');
var plus = new Audio('ljud/plus.wav');
var minus = new Audio('ljud/minus.wav');
var divison = new Audio('ljud/divi.wav');
var multiplication = new Audio('ljud/multi.wav');

function buttonHandler(button) {
    switch (button) {
        case document.getElementById("zero"):
            firstNumber = secondNumber;
            secondNumber = 0;
            zero.play();
            break;
        case document.getElementById("one"):
            firstNumber = secondNumber;
            secondNumber = 1;
            one.play();
            break;
        case document.getElementById("two"):
            firstNumber = secondNumber;
            secondNumber = 2;
            two.play();
            break;
        case document.getElementById("three"):
            firstNumber = secondNumber;
            secondNumber = 3;
            three.play();
            break;
        case document.getElementById("four"):
            firstNumber = secondNumber;
            secondNumber = 4;
            four.play();
            break;
        case document.getElementById("five"):
            firstNumber = secondNumber;
            secondNumber = 5;
            five.play();
            break;
        case document.getElementById("six"):
            firstNumber = secondNumber;
            secondNumber = 6;
            six.play();
            break;
        case document.getElementById("seven"):
            firstNumber = secondNumber;
            secondNumber = 7;
            seven.play();
            break;
        case document.getElementById("eight"):
            firstNumber = secondNumber;
            secondNumber = 8;
            eight.play();
            break;
        case document.getElementById("nine"):
            firstNumber = secondNumber;
            secondNumber = 9;
            nine.play();
            break;
        case document.getElementById("comma"):
            firstNumber = secondNumber;
            secondNumber = 0;
            zero.play();
            break;
        case document.getElementById("add"):
            add();
            add.play();
            break;
        case document.getElementById("subtract"):
            subtract();
            minus.play();
            break;
        case document.getElementById("division"):
            division();
            divison.play();
            break;
        case document.getElementById("multiply"):
            multiply();
            multiplication.play();
            break;

    }
}
