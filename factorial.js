const number = 5;

function factorial(num) {
  if (num === 0) return 1;
  if (num > 0) {
    return num * factorial(num - 1);
  } else {
    return 0;
  }
}

const fac = factorial(number);

console.log(`${number}! = ${fac}`);
