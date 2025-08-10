
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



const createButtons = function() {
    const row1 = document.createElement("div");
    row1.classList.add("row");
    const butt1 = document.createElement("button");
    butt1.classList.add("number");
    butt1.textContent = "1";
    const butt2 = document.createElement("button");
    butt2.classList.add("number");
    butt2.textContent = "2";
    const butt3 = document.createElement("button");
    butt3.classList.add("number");
    butt3.textContent = "3";
    const buttPlus = document.createElement("button");
    buttPlus.classList.add("operator");
    buttPlus.textContent = "+";
    const row2 = document.createElement("div");
    row2.classList.add("row");
    const butt4 = document.createElement("button");
    butt4.classList.add("number");
    butt4.textContent = "4";
    const butt5 = document.createElement("button");
    butt5.classList.add("number");
    butt5.textContent = "5";
    const butt6 = document.createElement("button");
    butt6.classList.add("number");
    butt6.textContent = "6";
    const buttSubt = document.createElement("button");
    buttSubt.classList.add("operator");
    buttSubt.textContent = "-";
    const row3 = document.createElement("div");
    row3.classList.add("row");
    const butt7 = document.createElement("button");
    butt7.classList.add("number");
    butt7.textContent = "7";
    const butt8 = document.createElement("button");
    butt8.classList.add("number");
    butt8.textContent = "8";
    const butt9 = document.createElement("button");
    butt9.classList.add("number");
    butt9.textContent = "9";
    const buttMult = document.createElement("button");
    buttMult.classList.add("operator");
    buttMult.textContent = "*";
    const row4 = document.createElement("div");
    row4.classList.add("row");
    const butt0 = document.createElement("button");
    butt0.classList.add("number");
    butt0.textContent = "0";
    const buttDot = document.createElement("button");
    buttDot.classList.add("operator");
    buttDot.textContent = ".";
    const buttEqual = document.createElement("button");
    buttEqual.classList.add("operator");
    buttEqual.textContent = "=";
    const buttDivide = document.createElement("button");
    buttDivide.classList.add("operator");
    buttDivide.textContent = "/";

    row1.appendChild(butt1);
    row1.appendChild(butt2);
    row1.appendChild(butt3);
    row1.appendChild(buttPlus);

    row2.appendChild(butt4);
    row2.appendChild(butt5);
    row2.appendChild(butt6);
    row2.appendChild(buttSubt);

    row3.appendChild(butt7);
    row3.appendChild(butt8);
    row3.appendChild(butt9);
    row3.appendChild(buttMult);

    row4.appendChild(butt0);
    row4.appendChild(buttDot);
    row4.appendChild(buttEqual);
    row4.appendChild(buttDivide);

    const container = document.querySelector('.buttonContainer');
    container.appendChild(row1);
    container.appendChild(row2);
    container.appendChild(row3);
    container.appendChild(row4);
    
    console.log("adsada " + container);
}

createButtons();