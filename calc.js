const oneBtn = document.getElementById('calc-one');
const twoBtn = document.getElementById('calc-two');
const threeBtn = document.getElementById('calc-three');
const fourBtn = document.getElementById('calc-four');
const fiveBtn = document.getElementById('calc-five');
const sixBtn = document.getElementById('calc-six');
const sevenBtn = document.getElementById('calc-seven');
const eightBtn = document.getElementById('calc-eight');
const nineBtn = document.getElementById('calc-nine');
const zeroBtn = document.getElementById('calc-zero');

const backspaceBtn = document.getElementById('calc-backspace');
const decimalBtn = document.getElementById('calc-decimal');
const clearBtn = document.getElementById('calc-clear');
const additionBtn = document.getElementById('calc-addition');
const subtractionBtn = document.getElementById('calc-subtraction');
const multiplyBtn = document.getElementById('calc-multiply');
const divisionBtn = document.getElementById('calc-division');
const equalBtn = document.getElementById('calc-equal');
const displayValueElement = document.getElementById('calc-display');

var displayStart = '0';
var pendingValue;
var evalArray = [];

const calcNumberBtn = document.getElementsByClassName('calc-num');
const calcOperatorBtn = document.getElementsByClassName('calc-operator');

//clear numbers/string

clearBtn.onclick = () => {
    displayStart = '0';
    pendingValue = undefined;
    evalArray = [];
    displayValueElement.innerText = displayStart;
};

//backspace 

backspaceBtn.onclick = () => {
    let displayLength = displayStart.length;
    displayStart = displayStart.slice(0, displayLength - 1);

    if (displayStart === '') 
        displayStart = '0';

    displayValueElement.innerText = displayStart;
    
    
}

//display one deciaml

decimalBtn.onclick = () => {
    if(!displayStart.includes('.'))

    displayStart += '.';
    displayValueElement.innerText = displayStart;
}

//displays number on displayValue 
var updateDisplay = (clickObject) => {
    var pressBtn = clickObject.target.innerText;

    if ( displayStart === '0') 
        displayStart = '';

        displayStart += pressBtn;
        displayValueElement.innerText = displayStart;
    
};

//arithmetic operation function 

var operationDisplayValue = (clickObject) => {
    var operation = clickObject.target.innerText;

    switch (operation) {
        case '+':
            pendingValue = displayStart;
            displayStart = '0';
            displayValueElement.innerText = displayStart;
            evalArray.push(pendingValue);
            evalArray.push('+');
            break;

        
        case '-':
            pendingValue = displayStart;
            displayStart = '0';
            displayValueElement.innerText = displayStart;
            evalArray.push(pendingValue);
            evalArray.push('-');
            break;

        case 'x':
            pendingValue = displayStart;
            displayStart = '0';
            displayValueElement.innerText = displayStart;
            evalArray.push(pendingValue);
            evalArray.push('*');
            break;
            
        case '/':
            pendingValue = displayStart;
            displayStart = '0';
            displayValueElement.innerText = displayStart;
            evalArray.push(pendingValue);
            evalArray.push('/');
            break;
             
        case '=':
            evalArray.push(displayStart);
            var evaluation = eval(evalArray.join(''));
            displayStart = evaluation + '';
            displayValueElement.innerText = displayStart;
            evalArray = [];


        default:
            break;
    }
}


for ( let i = 0; i < calcNumberBtn.length; i++) {
    calcNumberBtn[i].addEventListener('click', updateDisplay, false);
};

for ( let i = 0; i < calcOperatorBtn.length; i++) {
    calcOperatorBtn[i].addEventListener('click', operationDisplayValue, false);
}

