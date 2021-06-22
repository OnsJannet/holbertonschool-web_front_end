
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


let t0 = performance.now();
countPrimeNumbers();
let t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${(t1- t0)/100} milliseconds`);
