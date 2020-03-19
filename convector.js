const inputMeasure = document.querySelector('.imeasure');
const outputMeasure = document.querySelector('.omeasure');
const coefficient = document.querySelector('.coefficient');
const amount = document.querySelector('.amount');
const getResult = document.querySelector('.get_res').addEventListener('click', calculate);
const result = document.querySelector('.res_calc');

function calculate() {
    inputMeasure.value === '' ? alert("You should set input measure!"):{};
    outputMeasure.value === '' ? alert("You should set output measure!"):{};
    coefficient.value === '' ? alert("You should set coefficient value!"):{}; 
    result.innerHTML = (amount.value + ' ' +
        inputMeasure.value + 's' + ' ' + 'is equal' + ' ' +
        parseFloat(amount.value)*parseFloat(coefficient.value) + ' ' + outputMeasure.value + 's.');
}