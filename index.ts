var MAX_SIZE = 2 * 10 ** 4;

function SieveOfEratosthenes(primes: number[])
{
	var IsPrime = Array(MAX_SIZE).fill(true);
	
	var p: number, i: number;
	for (p = 2; p * p < MAX_SIZE; p++){ // p * p = next number of p
		if (IsPrime[p] == true){
			for(i = p * p; i < MAX_SIZE; i += p) 
            // 4 6 8 10 12 ....
				IsPrime[i] = false;
		}
	}

	for (p = 2; p < MAX_SIZE; p++){
		if (IsPrime[p]){
			primes.push(p);
        }
    }
}


var primes: number[] = [];

// Function call
SieveOfEratosthenes(primes);

console.log("1th is ",primes[0])
console.log("2,000th is ",primes[1999])

	


