


function operator(a,operator,b){
    let result = 0;
    switch (operator) {
    case '=':
        //print result to diplay
        break;
    case '+':
        result = add(a,b);
        break;
    case '-':
        result = subtract(a,b);
        break;
    case '*':
        result = multiply(a,b);
        break;
    case '/':
        result = divide(a,b);
        break;
    default:
    
    }
}

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return Math.round((a/b) * 100) / 100;
}