const numberOfRows = document.querySelector('.rows');
const numberOfColumns = document.querySelector('.columns');
const operation = document.querySelector('.operation');
const inputField = document.querySelector('.input_field');
const outputField = document.querySelector('.output_field');
const confirm = document.querySelector('.confirm').addEventListener('click', setMtx);
const result = document.querySelector('.get_res').addEventListener('click', calculate);

let randomValues;

function createMatrix(label ,rows, columns) {
    const capt = document.createElement('caption');
    capt.innerHTML = "Input matrix "+label;
    inputField.appendChild(capt);
    let row;
    for(let i = 0; i<rows; ++i) {
        for(let j=0; j<columns; ++j) {
            row = document.createElement('input');
            row.setAttribute('type', 'number');
            row.setAttribute('class', label+String(i)+String(j));
            row.value = 0;
            inputField.appendChild(row);
        }
        inputField.appendChild(document.createElement("br"));
    }
}

function createRandomButton() {
    const randomButton = document.createElement('button');
    randomButton.setAttribute('class', 'randomButton');
    randomButton.setAttribute('type', 'button');
    randomButton.innerHTML = "Set random values";
    inputField.appendChild(randomButton);
}

function setMtx() {
    if(numberOfRows.value === '' || numberOfColumns.value === '') {
        alert("You should set numbers of columns and rows!");
        return;
    }
    if(numberOfColumns.value === '0' || numberOfRows.value === '0') {
        alert("Numbers of rows and columns can't be equal zero!");
        return;
    }
    inputField.innerHTML = '';
    switch(operation.value) {
        case "multiplicate":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            createMatrix('B', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
        case "add":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            createMatrix('B', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
        case "range":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
        case "determinant":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
        case "subtract":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            createMatrix('B', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
        case "power":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            const powerLable = document.createElement('lable');
            powerLable.setAttribute('class', 'lable_of_')
            powerLable.innerHTML = "Degree: ";
            const powerInput = document.createElement('input');
            powerInput.setAttribute('type', 'number');
            powerInput.setAttribute('class', 'degree_value');
            powerLable.appendChild(powerInput);
            inputField.appendChild(powerLable);
            break;
        case "transpone":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
        case "of num":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            const numLable = document.createElement('lable');
            numLable.setAttribute('class', 'lable_of_');
            numLable.innerHTML = "Number: ";
            const numberInput = document.createElement('input');
            numberInput.setAttribute('type', 'number');
            numberInput.setAttribute('class', 'number_value');
            numberInput.value = 0;
            numLable.appendChild(numberInput);
            inputField.appendChild(numLable);
            break;
        case "convert":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
    }
    createRandomButton();
    randomValues = document.querySelector('.randomButton').addEventListener('click', randomize);
}

function randomize() {
    for(let i = 0; i<parseInt(numberOfRows.value); ++i) {
        for(let j = 0; j<parseInt(numberOfColumns.value); ++j) {
            document.querySelector('.A'+String(i)+String(j)).value = 
            (75 * Math.random() - 75 * Math.random()).toFixed(3);
        }
    }
    if(document.querySelector('.B'+'0'+'0') !== null) {
        for(let i = 0; i<parseInt(numberOfRows.value); ++i) {
            for(let j = 0; j<parseInt(numberOfColumns.value); ++j) {
                document.querySelector('.B'+String(i)+String(j)).value = 
                (75 * Math.random() - 75 * Math.random()).toFixed(3);
            }
        }
    }  
}

function multiplicateOnNumber() {
    const mlt = parseFloat(document.querySelector('.number_value').value);
    const arr = [];
    for(let i=0; i<parseInt(numberOfRows.value); ++i) {
        for(let j=0; j<parseInt(numberOfColumns.value); ++j) {
            arr.push(
                (mlt * parseFloat(document
                .querySelector('.A' + String(i) + String(j)).value))
                .toFixed(3)
                );
        }
    }
    return arr;
}

function transpone() {
    const arr = [];
    for(let i = 0; i<parseInt(numberOfColumns.value); ++i) {
        for(let j = 0; j<parseInt(numberOfRows.value); ++j) {
            arr.push(parseFloat(document.querySelector('.A' + String(j) + String(i)).value));
        }
    }
    return arr;
}

function add() {
    const arr = [];
    for(let i = 0; i < parseInt(numberOfRows.value); ++i) {
        for(let j = 0; j<parseInt(numberOfColumns.value); ++j) {
            arr.push(
            (parseFloat(document.querySelector('.A' + String(i) + String(j)).value) +
            parseFloat(document.querySelector('.B' + String(i) + String(j)).value))
            .toFixed(3)
            );
        }
    }
    return arr;
}

function subtract() {
    const arr = [];
    for(let i = 0; i < parseInt(numberOfRows.value); ++i) {
        for(let j = 0; j<parseInt(numberOfColumns.value); ++j) {
            arr.push(
            (parseFloat(document.querySelector('.A' + String(i) + String(j)).value) -
            parseFloat(document.querySelector('.B' + String(i) + String(j)).value))
            .toFixed(3)
            );
        }
    }
    return arr;
}

function setResult(fn) {
    let res, rarr;
    rarr = fn;
    for(let i = 0; i<parseInt(numberOfColumns.value)*parseInt(numberOfRows.value); ++i) {
        res = document.createElement('input');
        res.value = rarr[i];
        outputField.appendChild(res);
        (i+1) % parseInt(numberOfColumns.value) === 0 ? outputField.
        appendChild(document.createElement("br")):{};
    }
}

function calculate() {
    outputField.innerHTML = '';
    switch(operation.value) {
        case "of num":
            setResult(multiplicateOnNumber());
            break;
        case "transpone":
            rarr = transpone();
            for(let i = 0; i<parseInt(numberOfColumns.value) * parseInt(numberOfRows.value); ++i) {
                res = document.createElement('input');
                res.value = rarr[i];
                outputField.appendChild(res);
                (i+1) % parseInt(numberOfRows.value) === 0 ? outputField.
                appendChild(document.createElement("br")):{};
            }
            break;
        case "add":
            setResult(add());
            break;
        case "subtract":
            setResult(subtract());
            break;
    }
}