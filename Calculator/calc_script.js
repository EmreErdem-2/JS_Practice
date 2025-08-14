
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


function operator(a,operator,b){
    let result = 0;
    switch (operator) {
    case '=':
        return result;
        break;
    case '+':
        result = add(a,b);
        console.log("Operator: "+result);
        return result;
        break;
    case '-':
        result = subtract(a,b);
        return result;
        break;
    case '*':
        result = multiply(a,b);
        return result;
        break;
    case '/':
        if(b===0){
            alert("can't divide by 0!!");
            return 0;
        } 
        result = divide(a,b);
        return result;
        break;
    default:
        return result;
    }
}

function getSingleOperator(str) {
    if(str[0]==="-") str=str.slice(1,str.length);
    const match = str.match(/[+\-*/%^]/);
    return match ? match[0] : null;
}
function checkDecimal(str){
    if(str[0]==="-") str=str.slice(1,str.length);
    if(str[str.length-1].match(/[+\-*/%^]/)) str=str.slice(0,str.length-1);
    const op = getSingleOperator(str);
    let dotCount=0;
    if(op==null){
        dotCount = (str.match(/\./g) || []).length;
        if(dotCount>=1) return false;
        else return true;
    }
    else{
        const numbers = str.split(op);
        dotCount = (numbers[1].match(/\./g) || []).length;
        if(dotCount>=1) return false;
        else return true;
    }
}
function deleteOne(string){
    return string.slice(0,-1);
}
isResult = false;

function inputOperator(inputString,inputOp) {
    isResult=false;
    inputString=inputString.replace(/ /g, '');
    
    if(inputString==="-" && inputOp==="-") return inputString;
    else if(inputString==="-" && inputOp!="-") return "";

    if(inputString==="" && inputOp!='-') return "";
    else if(inputString==="" && inputOp==='-') return "-";

    if(inputOp==="." && !checkDecimal(inputString)) {
        return inputString;
    }
    const op = getSingleOperator(inputString);

    if(op===null){
        if(inputOp=='=') return inputString;
        if(inputOp=='.') return inputString+inputOp;
        return inputString+inputOp;
    }
    else{
        console.log(inputString);
        console.log("last: "+inputString[inputString.length-1]);
        if(inputString==="-" && inputOp!="-") return "";
        else if(inputString==="-" && inputOp==="-") return inputString;

        if(inputString[inputString.length-1]===op){ //last character is the operator in the string
            console.log(inputString);
            if(inputOp==="=") return deleteOne(inputString);
            else if(inputOp===".") return deleteOne(inputString)+inputOp;
            const singleNum = inputString.split(op);
            return singleNum[0]+inputOp;
        }

        if(inputOp===".") return inputString+inputOp;

        console.log("operator in input string: " + op);
        let numbers = inputString.split(op);
        numbers = [...numbers.map(item=>parseFloat(item))];
        let longResult = operator(numbers[0],op,numbers[1]);
        const result = Math.floor(longResult * 100) / 100;
        if(inputOp==="=") {
            isResult=true; 
            return result.toString(); 
        }

        return result.toString()+inputOp;
    }
}
function inputNumber(inputString,buttonNum) {
    if(inputString==="0" || isResult){
        isResult=false;
        return buttonNum;
    }
    else{
        return inputString += buttonNum;
    }
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
    buttDot.id = "Decimal";
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
    
    inputField = document.querySelector("input");

    const clearButton = document.createElement("button");
    clearButton.classList.add("utility");
    clearButton.textContent = "Clear";
    clearButton.addEventListener("click", ()=>{
        inputField.value="";
    });
    const delButton = document.createElement("button");
    delButton.classList.add("utility");
    delButton.textContent = "Delete";
    delButton.addEventListener("click", ()=>{
        inputField.value=deleteOne(inputField.value)
    });
    
    const container = document.querySelector('.buttonContainer');
    container.appendChild(row1);
    container.appendChild(row2);
    container.appendChild(row3);
    container.appendChild(row4);
    container.appendChild(clearButton);
    container.appendChild(delButton);

    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    
    numberButtons.forEach(element => {
        element.addEventListener("click",()=>{
            inputField.value = inputNumber(inputField.value,element.textContent);
            console.log("Number clicked: "+ element.textContent);
        });
    });

    operatorButtons.forEach(element => {
        element.addEventListener("click",() => {
            inputField.value = inputOperator(inputField.value,element.textContent);
            console.log("Operator clicked: "+ element.textContent);
        });
    });
}


createButtons();