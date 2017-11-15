function division(firstNumber, secondNumber) {
    return firstNumber/secondNumber;
}

function add(firstNumber, secondNumber) {
    return firstNumber+secondNumber;
}

/*var zeroBtn = document.getElementById("zero");
var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var commaBtn = document.getElementById("comma");*/

var buttons = document.getElementById("buttons");

buttons.addEventListener("click", handleClick);

function handleClick(event) {
    event.target = event.target
    var element = event.target;

    while (element) {
        if (element.nodeName === "BUTTON") {
            console.log('hej');
            buttonHandler(element);
            break;
        }

        element = element.parentNode;
    }
}

function buttonHandler(button) {
    switch (button) {
        case 

    }
}


function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;

}