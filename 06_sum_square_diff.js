/*
The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

function sumSquareDifference(n) {

	let sum_square  = 0;
	let square_sum = 0;
	for (let i = 1; i <= n; i++) {
		sum_square += i ** 2;
		square_sum += i;
	}
	return square_sum ** 2 - sum_square;
}
  
  console.log(sumSquareDifference(100));