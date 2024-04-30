/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
we can see that the 6th prime is 13.

What is the nth prime number?
*/

function nthPrime(n) {
	let primes = Array(0);
	for (let i = 2; primes.length < n; i++) {
		let is_prime = 1;
		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				is_prime = 0;
				break;
			}
		}
		if (is_prime == 1) {
			primes.push(i);
		}
	}
	return primes[primes.length - 1];
}
  
console.log(nthPrime(10001));