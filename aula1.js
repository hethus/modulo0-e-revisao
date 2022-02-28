/*

let nome = prompt("qual é o seu nome: ")
const idade = 898

operadores logicos = (+ - * / %)

__

const n = parseInt(prompt("qual o numero: "))

if(n % 2 == 0){
  console.log(`o numero ${n} é par`)
} else {
  console.log(`o numero ${n} é impar`)
}

= é para colocar valor
== é para verificar se é igual
=== verica valor e tipo da variavel

*/

const prompt = require('prompt-sync')();

const notaUm = parseFloat(prompt("primeira nota: "))
const notaDois = parseFloat(prompt("segunda nota: "))
const notaTres = parseFloat(prompt("terceira nota: "))

const media = (notaUm + notaDois + notaTres)/3 // ou pode colocar o .toFixed() no final da media desde que eu envolva ela com ()

console.log(`a sua media de bosta é ${media.toFixed(1)}`)

if(media >= 7){
  console.log("\nvc passou :) ")
}else if(media >= 5 && media < 7){
  console.log("\nvc ficou de recuperação :/ ")
}else{
  console.log("\nvc reprovou :'(")
}


// lembrando que: && significa "e", || é "ou" e not "não"
