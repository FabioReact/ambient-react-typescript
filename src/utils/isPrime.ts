export function isPrime(number: number) {
  console.log('isPrime calculation')
  // const number = Math.floor(Math.random() * 100);
  let flag = false

  if (number == 1) {
    console.log(' 1 is neither prime nor composite')
  } else if (number > 1) {
    // Iterate from 2 to number/2.
    for (let i = 2; i < number / 2; i++) {
      // Check if 'i' divides 'number' without
      // leaving the remainder
      if (number % i == 0) {
        // If yes, then set a flag to true
        // and exit from the loop.
        flag = true
        break
      }
    }

    // If the flag is found true, it means a divisor was found
    // during the iteration.
    if (flag == true) return `${number} is not a prime number`
    // Otherwise, no divisor was found.
    else return `${number} is a prime number`
  }

  // If the number is less than 1 (either 0 or negative)
  // then we can say it is not a prime number.
  else {
    return `${number} is not a prime number`
  }
}
