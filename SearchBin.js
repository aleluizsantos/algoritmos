// https://www.youtube.com/watch?v=vAfQ9oRRmRo

const fs = require("fs");

// Pegar o valor no argumento executado na linha de comando
if (process.argv.length !== 3) return console.log("Falta do argumento");
// PALAVRA PARA BUSCAR PASSADO NO ARGUMENTO
let word = process.argv[2];
// BUSCA BINÁRIA
const fileWord = "./palavras.txt";
// Fazer a leitura do arquivo com uma lista de palavaras e converter em uma string
let listWord = fs.readFileSync(fileWord, "utf-8").split("\n").filter(Boolean);

// Busca simples
function search(item, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) return i;
  }
  return -1;
}

// Busca Binária
function bin_search(item, list) {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    let mean = Number.parseInt((left + right) / 2);

    if (list[mean] === item) return mean;

    item > list[mean] ? (left = mean + 1) : (right = mean - 1);
  }

  return -1;
}

let timeSearch = process.hrtime.bigint();
const index = bin_search(word, listWord);
timeSearch = process.hrtime.bigint() - timeSearch;

const message =
  index !== -1
    ? `"BUSCA BINARIA>> index:", ${index}, ${listWord[index]}, ${timeSearch}`
    : "Não encontrado";

console.log(message);
