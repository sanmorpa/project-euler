/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/
const gcd = (a, b) => a ? gcd(b % a, a) : b;

const lcm = (a, b) => a * b / gcd(a, b);

function smallestMult(n) {
	let divs = Array(0);
	for (let i = 2; i <= n; i++) {
		divs.push(i);
	}
	return divs.reduce(lcm);
}
  
console.log(smallestMult(20)); /*232792560*/