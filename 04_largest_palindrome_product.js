/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
	let n1Max = 10 ** n - 1
	let n2Max = 10 ** n - 1
	let n1Min = 10 ** (n - 1)
	let n2Min = 10 ** (n - 1)
	let palindrome = 0;
	for (let i = n1Max; i >= n1Min; i--) {
		for (let j = n2Max; j >= n2Min; j--) {
			let product = i * j;
			if (product < palindrome) {
				break;
			}
			let number = product;
			let reverse = 0;
			while (number != 0) {
                reverse = reverse * 10 + number % 10;
                number = parseInt(number / 10, 10);
            }
			if (product == reverse) {
				palindrome = product;
			}
		}
	}
	return palindrome;
}
  
console.log(largestPalindromeProduct(3));