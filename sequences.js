const sequenceName = document.querySelector('.stype');
const lastElement = document.querySelector('.laste');
const sequenceOutput = document.querySelector('.out_result');
const submitButton = document.querySelector('.submit').addEventListener('click', calculate);


function prime(n){
	let seq=[0,1], div=0, count=0;
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
	return seq;
}
function nonprime(n){
	let seq=[], div=0, count=0;
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
	return seq;
}
function phi(n){
	let div=0, count=0, flag=0, seq=[];

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
	return seq;
}
function recaman(n){
	let seq=[];
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
	}
	return seq;
}
function fibonacci(n){
	let seq=[0,1];
	if(n==0){
		return seq[0];
	}
	if(n==1){
		return seq;
	}
	for(let i=2;i<=n;++i){
		seq.push(seq[i-2]+seq[i-1]);
	}
	return seq;
}
function perfect(n){
	let seq=[], div=0, sum=0;
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
	return seq;
}
function opmanis(n){
	let seq=[], buf='0', ax=0, flag=0;
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
	return seq;
}

function calculate() {
    if(lastElement.value === '') {
        alert("You should set last element!");
    }
    switch(sequenceName.value) {
        case "prime":
            sequenceOutput.innerHTML = prime(parseInt(lastElement.value));
            break;
    }
}