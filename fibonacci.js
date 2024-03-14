/**
 * Gerar a sequência, e qualquer termo, da série de Fibonacci
 * @param {Number} pos É o termo que deseja calcular na sequencia de fibonacci
 * @returns {object} {seqFib, valueTerm}
 */

function fibonacci(pos) {
  let nextFib = [0, 1];
  let seqFib = nextFib;
  let valueTerm = 0;

  const term = Number.parseInt(pos);

  for (let index = 0; index < term - 2; index++) {
    const [n1, n2] = nextFib;
    const sum = n1 + n2;
    nextFib = [n2, sum];
    seqFib.push(sum);
    valueTerm = sum;
  }
  return { seqFib, valueTerm };
}

const { seqFib, valueTerm } = fibonacci(3);

console.log("Termo: ", seqFib);
