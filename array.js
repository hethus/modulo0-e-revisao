const prompt = require('prompt-sync')();

let nomes = ["fernando", "ahhh", "tchau", "ok"] //["nome1", "nome2", "nome3", "nome4"]

console.log(nomes)

nomes[0] = "lol"

console.log(nomes)
console.log(nomes.indexOf("ahhh")) //indexOf mostra em qual posição a variavel esta e se retorna -1 é pq a variavel n existe ali
nomes.push("ata")
console.log(nomes)
console.log(nomes.length) //mostra quantas variaveis no array
nomes.pop() //remove varivel do final
nomes.shift() //remove variavel do começo
console.log(nomes)