//ONLY HANDLES SINGLE DIGIT PROBLEMS

let textVal = ""
let numOne = null;
let operator = null;
let trueOperator = null;
function operate(operator, a, b){
    switch(operator){
        case "add":
            return add(a,b);
        case "subtract":
            return subtract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
    }      
}
function add(a, b){
    return Number(a) + Number(b);
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function setText(item){
    let textVal = item.getAttribute("id");
    display.textContent = textVal;
    if (numOne == null){
        numOne = textVal;
    }
}

const display = document.querySelector("#display")
document.querySelectorAll(".num").forEach(item => {
    item.addEventListener("click", event => {
        let textVal = item.getAttribute("id");
        display.textContent += textVal;
        if (numOne == null || trueOperator == null){
            numOne = textVal;
        }
        else {
            let ans = operate(trueOperator, numOne, textVal);
            display.textContent = ans;
            numOne = ans;
            operator = null;
        }
    })
})
document.querySelectorAll(".op").forEach(item => {
    item.addEventListener("click", event => {
        operator = item.textContent;
        trueOperator = item.getAttribute("id");
        display.textContent += operator;
    })
})
const clear = document.querySelector("#clear");
clear.addEventListener ("click", event => {
    display.textContent = "";
    operator = null;
    trueOperator = null;
    numOne = null;
})
const deleted = document.querySelector("#delete");
deleted.addEventListener ("click", event => {
    let d = display.textContent;
    let remLast = d.slice(0, d.length - 1);
    display.textContent = remLast;
})
