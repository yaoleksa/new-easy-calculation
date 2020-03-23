const inputEquation = document.querySelector('.equation');
const inputBeginning = document.querySelector('.beginning');
const inputEnd = document.querySelector('.end');
const outputTable = document.querySelector('.output_table')
const getResult = document.querySelector('.calculate').addEventListener('click', calculate);

function calculate() {

    const yarr = [];
    let xarr = [];
    let newEquation = '';

    for (let i = 0; i < inputEquation.value.length; ++i) {
        if (inputEquation.value[i] === ',') {
            newEquation += '.';
        } else {
            newEquation += inputEquation.value[i];
        }
    }

    inputEquation.value = newEquation;

    for (let x = parseFloat(inputBeginning.value); x < parseFloat(inputEnd.value); ++x) {
        yarr.push(parseFloat(eval(inputEquation.value)).toFixed(3));
    }

    xarr.push('x', '     ', 'y', '\n');

    for (let y = parseFloat(inputBeginning.value), i = 0; y < parseFloat(inputEnd.value); ++y) {
        xarr.push(y, '     ', yarr[i], '\n');
        ++i
    }

    xarr = xarr.join('').replace(/,/g, '');

    outputTable.innerHTML = xarr;

}
