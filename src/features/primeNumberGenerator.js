const isPrime = (number) => {
  // 0 is not prime so we return false
  if (number < 2) {
    return false;
  }

  // return true if number passed in is 1 or 2
  if (number === 2) {
    return true;
  }

  // For other numbers, start from 2 upto but not including the number
  // Go through and confirm there are no divisors
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const primeNumberGenerator = (n) => {
  // Initialize an empty array to store all primes
  const primes = [];
  //Start checking for prime numbers from 0
  let i = 0;
  //Stop the loop when the primes array has n number of elements
  while (primes.length < n) {
    // If number is prime; add to the primes array
    if (isPrime(i)) {
      primes.push(i);
    }
    //Increment the number
    i++;
  }

  return primes;
};

export default primeNumberGenerator;