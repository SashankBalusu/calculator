// Improvements :
// Add decimal functionality and keyboard input
let numTwo = null;
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
    if (b == 0){
        return alert("you cant divide by 0!") 
    }
    let quotient = a/b;
    return quotient.toFixed(3);
}

const display = document.querySelector("#display")
document.querySelectorAll(".num").forEach(item => {
    item.addEventListener("click", event => {
        textVal = item.getAttribute("id");
        display.textContent += textVal;
        if (numOne == null && trueOperator == null){
            numOne = textVal;
        }
        else if (numOne && trueOperator == null){
            numOne += textVal;
        }
        else if(numTwo == null){
            numTwo= textVal;
        }
        else {
            numTwo += textVal
        }

    })
})
document.querySelectorAll(".op").forEach(item => {
    item.addEventListener("click", event => {
        if(!trueOperator){
            operator = item.textContent;
            trueOperator = item.getAttribute("id");
            display.textContent += operator;
        }
        else{
            let sol = operate(trueOperator, numOne, numTwo)
            display.textContent = sol;
            numOne = sol;
            textVal = null;
            numTwo = null;
            operator = item.textContent;
            trueOperator = item.getAttribute("id");
            display.textContent += operator
        }
        
    })
})
const clear = document.querySelector("#clear");
clear.addEventListener ("click", event => {
    display.textContent = "";
    operator = null;
    trueOperator = null;
    numOne = null;
    numTwo = null;
})
const deleted = document.querySelector("#delete");
deleted.addEventListener ("click", event => {
    let d = display.textContent;
    let remLast = d.slice(0, d.length - 1);
    display.textContent = remLast;
    if (numTwo == null && trueOperator == null){
        let stringOne = numOne.toString();
        let editedString = stringOne.slice(0,-1);
        numOne = parseInt(editedString);
    }
    else if (numTwo == null){
        operator = null;
        trueOperator = null;
    }
    else {
        let stringTwo = numTwo.toString();
        let editString = stringTwo.slice(0,-1);
        numTwo = parseInt(editString);
    }
})
const equal = document.querySelector("#equal");
equal.addEventListener ("click", event => {
    if (trueOperator && numOne && textVal){
        let sol = operate(trueOperator, numOne, numTwo)
        display.textContent = sol;
        numOne = sol;
        trueOperator = null;
        textVal = null;
        numTwo = null;
    }
} )
// const decimal = document.querySelector("#decimal");
// decimal.addEventListener ("click", event => {
//     if (numTwo == null){
//         let string = numOne.toString();
//         string += ".0";
//         numOne = parseFloat(string);
//         console.log(numOne)
//         display.textContent += ".0"
//     }
//     else {
//         let string2 = numTwo.toString();
//         string2 += ".1";
//         numTwo = parseFloat(string2);
//         display.textContent += ".0"
//     }
// })