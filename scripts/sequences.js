const firstElementOfAllSequences = 'n'+'   '+'a(n)'+'\n';
const spaces = '   ';
const sequenceName = document.querySelector('.stype');
const lastElement = document.querySelector('.laste');
const sequenceOutput = document.querySelector('.out_result');
const submitButton = document.querySelector('.submit').addEventListener('click', calculate);


function prime(n){
	const seq=[];
	let div=0, count=0;
	for(let i=0; i<n;++i){
		div=1;
		while(div<=parseInt(i/2)){
			if(i%div===0){
				++count;
			}
			++div;
		}
		if(count===1){
			seq.push(i);
		}
		count=0;
	}
	const newSeq = [];
	newSeq.push(firstElementOfAllSequences);
	for(let i = 0; i<seq.length; ++i) {
		newSeq.push(i + 1, spaces, seq[i], '\n');
	}
	return newSeq;
}
function nonprime(n){
	const seq=[]; 
	let div=0, count=0;
	for(let i=0; i<n;++i){
		div=1;
		while(div<=parseInt(i/2)){
			if(i%div===0){
				++count;
			}
			++div;
		}
		if(count>1){
			seq.push(i);
		}
		count=0;
	}
	const newSeq = [];
	newSeq.push(firstElementOfAllSequences);
	for(let i = 0; i<seq.length; ++i) {
		newSeq.push(i + 1, spaces, seq[i], '\n');
	}
	return newSeq;
}
function phi(n){
	const seq=[];
	let div=0, count=0, flag=0;

	for(let i=1; i<=n; ++i){
		count=0;
		for(let j=1; j<i; ++j){
			flag=0; div=1;
			while(div<=j){
				if(i%div==0&&j%div==0){
					++flag;
				}
				++div;
			}
			if(flag==1){
				++count;
			}
		}
		seq.push(count);
	}
	seq[0]=1;
	const newSeq = [];
	newSeq.push(firstElementOfAllSequences);
	for(let i = 0; i<seq.length; ++i) {
		newSeq.push(i + 1, spaces, seq[i], '\n');
	}
	return newSeq;
}
function recaman(n){
	const seq=[];
	let indexOfElement = 0;
	for(let i=0; i<=n; ++i){
		if(i==0){
			seq.push(i);
		}
		else if(seq[i-1]-i>0&&!seq.includes(seq[i-1]-i)){
			seq.push(seq[i-1]-i);
		}
		else{
			seq.push(seq[i-1]+i);
		}
		++indexOfElement;
	}
	const newSeq = [];
	newSeq.push(firstElementOfAllSequences);
	for(let i = 0; i<seq.length; ++i) {
		newSeq.push(i, spaces, seq[i], '\n');
	}
	return newSeq;
}
function fibonacci(n){
	const seq = [0, 1];
	let first = 0, second = 1, result = 0;
	if(n==0){
		return seq.slice(0,4);
	}
	if(n==1){
		return seq;
	}
	for(let i=2;i<=n;++i){
		result = first + second;
		seq.push(result);
		first = second;
		second = result;
	}
	const newSeq = [];
	newSeq.push(firstElementOfAllSequences);
	for(let i = 0; i<seq.length; ++i) {
		newSeq.push(i, spaces, seq[i], '\n');
	}
	return newSeq;
}
function perfect(n){
	const seq=[];
	let div=0, sum=0;
	for(let i=1; i<n; ++i){
		div=1;
		while(div<=parseInt(i/2)){
			if(i%div===0){
				sum+=div;
			}
			++div;
		}
		if(i===sum){
		seq.push(sum);
		 } 
		 sum=0;
	}
	const newSeq = [];
	newSeq.push(firstElementOfAllSequences);
	for(let i = 0; i<seq.length; ++i) {
		newSeq.push(i + 1, spaces, seq[i], '\n');
	}
	return newSeq;
}
function opmanis(n){
	const seq=[];
	let buf='0', ax=0, flag=0;
		for(let i=1; i<=n;++i){
			ax=1; flag=0; buf='0';
			while(ax<=i){
				buf=String(ax)+buf;
				if((parseInt(buf)/10)%i===0){
					seq.push(ax);
					ax=i; flag=1;
				}
				++ax;
			}
			if(flag===0){
				seq.push(0);
			}
		}
	const newSeq = [];
	newSeq.push(firstElementOfAllSequences);
	for(let i = 0; i<seq.length; ++i) {
		newSeq.push(i + 1, spaces, seq[i], '\n');
	}
	return newSeq;
}
function factorial(n) {
	let result = 1;
	let multiplicator = n;
	while(multiplicator>1) {
		result = result*multiplicator;
		--multiplicator;
	}
	return result;
}
function catalan(n) {
	const seq=[];
	for(let i=0; i<=n; ++i) {
		seq.push(Math.round(factorial(2*i)/(factorial(i)*factorial(i+1))));
	}
	const newSeq = [];
	newSeq.push(firstElementOfAllSequences);
	for(let i = 0; i<seq.length; ++i) {
		newSeq.push(i, spaces, seq[i], '\n');
	}
	return newSeq;
}
function bin(n) {
	const seq = [];
	let buf = '', ax = 0;
	for(let i = 0; i<=n; ++i) {
		ax = i;
		while(ax>0) {
			buf += String(ax%2);
			ax = parseInt(ax/2);
		}
		seq.push(buf.split('').reverse().join());
		buf = '';
	}
	const newSeq = [];
	newSeq.push(firstElementOfAllSequences, 0, spaces, -1, '\n');
	for(let i = 1; i<seq.length; ++i) {
		newSeq.push(
			i, spaces,
			String(seq[i]).replace(/0/g,'').length - String(seq[i]).replace(/1/g,'').length,
			'\n'
			);
	}
	return newSeq;
}

function calculate() {
    if(lastElement.value === '') {
		alert("You should set last element!");
		return;
	}
	else {
		lastElement.value = parseInt(lastElement.value);
	}
    switch(sequenceName.value) {
        case "prime":
            sequenceOutput.innerHTML = String(prime(lastElement.value)).replace(/,/g, '');
            break;
        case "nonprime":
            sequenceOutput.innerHTML = String(nonprime(lastElement.value)).replace(/,/g, '');
            break;
        case "fibonacci":
            sequenceOutput.innerHTML = String(fibonacci(lastElement.value)).replace(/,/g, '');
			break;
		case "recaman":
			sequenceOutput.innerHTML = String(recaman(lastElement.value)).replace(/,/g, '');
			break;
		case "catalan":
			sequenceOutput.innerHTML = String(catalan(lastElement.value)).replace(/,/g, '');
			break;
		case "totient":
			sequenceOutput.innerHTML = String(phi(lastElement.value)).replace(/,/g, '');
			break;
		case "perfect":
			sequenceOutput.innerHTML = String(perfect(lastElement.value)).replace(/,/g, '');
			break;
		case "opmanis":
			sequenceOutput.innerHTML = String(opmanis(lastElement.value)).replace(/,/g, '');
			break;
		case "binary":
			sequenceOutput.innerHTML = String(bin(lastElement.value)).replace(/,/g, '');
			break;	
    }
}