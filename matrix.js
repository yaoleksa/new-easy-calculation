const numberOfRows = document.querySelector('.rows');
const numberOfColumns = document.querySelector('.columns');
const operation = document.querySelector('.operation');
const inputField = document.querySelector('.input_field');
const confirm = document.querySelector('.confirm').addEventListener('click', setMtx);
const result = document.querySelector('.get_res').addEventListener('click', calculate);

function createMatrix(label = '' ,rows, columns) {
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
    switch(operation.value) {
        case "multiplicate":
            createMatrix('A', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            createMatrix('B', parseInt(numberOfRows.value), parseInt(numberOfColumns.value));
            break;
    }
    
}

function calculate() {
    alert(document.querySelector('.A00').value);
}