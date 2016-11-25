// variables
var number1 = "";
var number2 = "";
var operator = "";
var display = "";
var result = "";

// functions
function displayChange(x) {
    display = "";
    display = x.toString().substring(0,9);
}

function clearAll() {
    number1 = "";
    number2 = "";
    operator = "";
    display = "";
    result = "";
}

// if number clicked
$(".number").on("click", function() {
    if (operator === "") {
        number1+=$(this).attr("value");
        displayChange(number1);
    }
    else {
        number2+=$(this).attr("value");
        displayChange(number2);
    }
    $("#display").html(display);
})

// if operator clicked
$(".operator").on("click", function() {
    if (number1 === "") {
        number1 = 0;
        operator = $(this).attr("value");
    }
    if (number1 !== "" && number2 === "") {
        operator = $(this).attr("value");
    }
})

// if clear clicked
$(".clear").on("click", function() {
    clearAll();
    $("#display").html(display);
})

// if equal clicked
$(".equal").on("click", function() {
    firstNumber = parseFloat(number1);
    secondNumber = parseFloat(number2);
    switch (operator) {
        case "plus":
            result = firstNumber + secondNumber;
            displayChange(result);
            break;
        case "minus":
            result = firstNumber - secondNumber;
            displayChange(result);
            break;
        case "times":
            result = firstNumber * secondNumber;
            displayChange(result);
            break;
        case "divide":
            result = firstNumber / secondNumber;
            displayChange(result);
            break;
    }
    $("#display").html(display);
    number1 = result.toString();
    number2 = "";
    operator = "";
})