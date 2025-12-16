// Unnatural Prime
// Given an integer, determine if that number is a prime number or a negative prime number.

// A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
// A negative prime number is the negative version of a positive prime number.
// 1 and 0 are not considered prime numbers.

// “Is there any number other than 1 and itself that divides this number evenly?”

// “Is there any number other than 1 and itself that divides this number evenly?”

function isUnnaturalPrime(n) {
  //console.log(n)
  let abs = Math.abs(n);
  if (abs === 0 || abs === 1) {
    return false;
  } else {
    // get the square root
    let sqr = Math.sqrt(abs);
    for (let i = 2; i <= sqr; i++) {
      console.log(i);
      if (abs % i === 0) {
        return false;
      }
    }
    return true;
  }
  //return n;
}

isUnnaturalPrime(-23);

function isUnnaturalPrime(n) {
  const abs = Math.abs(n);

  if (abs === 0 || abs === 1) return false;

  const limit = Math.sqrt(abs);
  for (let i = 2; i <= limit; i++) {
    if (abs % i === 0) {
      return false;
    }
  }

  return true;
}
