export const isPrime = (num) => {
  // // simple version
  // // make a loop to try to find other value thats numbe can be divided,
  // // if almost one is find, so the it is not prime
  // for (var i = 3; i < num; i++)
  //   if (num % i === 0)
  //     return false;

  // optmized version
  // don`t need to check al the number just square of num and odd numbers
  const limit = Math.sqrt(num)
  for (var i = 3; i < limit; i += 2)
    if (num % i === 0)
      return false;

  // if it passes all test and is bigger than 1, so is prime
  return num > 1;
}