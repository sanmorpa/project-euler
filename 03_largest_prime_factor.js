/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number
*/

function largestPrimeFactor(number) {
    let maxPrime = -1;
    while(number % 2 == 0) {
        number = number / 2;
        maxPrime = 2;
    }
 
    while(number % 3 == 0) {
        number = number / 3;
        maxPrime = 3;
    }
 
    for (let i = 5; i <= Math.sqrt(number); i += 6) {
        while (number % i == 0) {
            maxPrime = i;
            number = number / i;
        }
        while (number % (i + 2) == 0) {
            maxPrime = i + 2;
            number = number / (i + 2);
        }
    }
     
    return number > 4 ? number : maxPrime;
}
  
console.log(largestPrimeFactor(13195));