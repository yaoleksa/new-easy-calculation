const numberOfRows = document.querySelector('.rows');
const numberOfColumns = document.querySelector('.columns');
const operation = document.querySelector('.operation');
const inputField = document.querySelector('.input_field');
const confirm = document.querySelector('.confirm').addEventListener('click', setMtx);
const result = document.querySelector('.get_res').addEventListener('click', calculate);

function createMatrix(label ,rows, columns) {
    const capt = document.createElement('caption');
    capt.innerHTML = "Input matrix "+label;
    inputField.appendChild(capt);
    let row;
    for(let i = 0; i<rows; ++i) {
        for(let j=0; j<columns; ++j) {
            row = document.createElement('input');
            row.setAttribute('type', 'number');
            row.style.width = '45px';
            row.setAttribute('class', label+String(i)+String(j));
            inputField.appendChild(row);
        }
        inputField.appendChild(document.createElement("br"));
    }
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
            createMatrix('', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
        case "determinant":
            createMatrix('', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
        case "subtract":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            createMatrix('B', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
        case "power":
            createMatrix('', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            const powerLable = document.createElement('lable');
            powerLable.innerHTML = "Degree: ";
            powerLable.style.display = 'inline-block';
            powerLable.style.marginTop = '15px';
            const powerInput = document.createElement('input');
            powerInput.setAttribute('type', 'number');
            powerInput.setAttribute('class', 'degree_value');
            powerInput.style.width = '45px';
            powerLable.appendChild(powerInput);
            inputField.appendChild(powerLable);
            break;
        case "transpone":
            createMatrix('', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
        case "of num":
            createMatrix('', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            const numLable = document.createElement('lable');
            numLable.innerHTML = "Number: ";
            numLable.style.display = 'inline-block';
            numLable.style.marginTop = '15px';
            const numberInput = document.createElement('input');
            numberInput.setAttribute('type', 'number');
            numberInput.setAttribute('class', 'number_value');
            numberInput.style.width = '45px';
            numLable.appendChild(numberInput);
            inputField.appendChild(numLable);
            break;
        case "convert":
            createMatrix('', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
    }
}

function calculate() {
    alert(document.querySelector('.A00').value);
}