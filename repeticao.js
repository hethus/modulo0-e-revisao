/*
for(let i = 0; i <= 10; i++){
  console.log(i)
}
*/
const prompt = require('prompt-sync')();

let nomes = []

for(i = 0; i <= 3; i++){
  nomes[i] = prompt("nome: ")
  // como ele so vai chegar ate o 3, depois disso ele vai parar de pedir nome e vai passar pro proximo comando
}

for(i = 0; i < nomes.length; i++){// length é o tamanho, se [] começa no 0, ele sempre vai contar como se tivesse 1 a mais
  console.log(`oi ${nomes[i]}`) // separa os dados pq ele acrescenta no i e vai mostrando aquela posição dependendo de quanto o i valer
}

console.log(nomes) // aqui mostra todos dados juntos

//_______

let o = 0

while(o <= 10){
  console.log(o)
  o++
}