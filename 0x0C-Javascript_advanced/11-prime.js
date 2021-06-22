

function countPrimeNumbers(number){
	for (let counter = 0; counter <= 100; counter++) {
		let notPrime = false;
		for (let i = 2; i < number; i++) {
        	if (counter%i===0 && i!==counter) {
				notPrime = true;
			}
		}
		if (notPrime === false) {
                console.log(counter);
		}
	}
}

function loop() {
  for (let times = 0; times < 100; ++times) {
    countPrimeNumbers();
  }
}

let t0 = performance.now();
setTimeout(loop(), 0);
let t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers 100 times was ${(t1- t0)/1000} milliseconds`);
