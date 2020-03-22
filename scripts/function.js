const inputEquation = document.querySelector('.equation');
const inputBeginning = document.querySelector('.beginning');
const inputEnd = document.querySelector('.end');
const outputTable = document.querySelector('.output_table')
const getResult = document.querySelector('.calculate').addEventListener('click', calculate);
const graph = document.querySelector('.graph').getContext('2d');

function calculate() {

    const yarr = [];
    let xarr = [];

    for(let x = parseFloat(inputBeginning.value); x < parseFloat(inputEnd.value); ++x) {
        yarr.push(parseFloat(eval(inputEquation.value)).toFixed(3));
    }

    xarr.push('x', '     ', 'y', '\n');

    for(let y = parseFloat(inputBeginning.value), i = 0; y < parseFloat(inputEnd.value); ++y) {
        xarr.push(y, '     ', yarr[i], '\n');
        ++i
    }

    xarr = xarr.join('').replace(/,/g, '');

    outputTable.innerHTML = xarr;

    draw(yarr);
}

function draw(points) {
    const x = 0;
    let start = document.querySelector('.graph').height - eval(inputEquation.value);
    graph.clearRect(0, 0, document.querySelector('.graph').width,
    document.querySelector('.graph').height);
    graph.strokeStyle = "#8b0000";
    graph.lineWidth = 0.7;

    graph.beginPath();
    graph.moveTo(0,start);
    
    for (i = 0; i < 24 ; i++) {
        var dy = i % 2 == 0 ? 25 : -25;
        graph.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
      }

    graph.stroke();
}

