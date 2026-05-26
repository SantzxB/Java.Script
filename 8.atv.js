//Calcule a Média Aritmética do vetor Abaixo:
//Utilize os recursos do ES6

const notas = [10,10,10]

console.log("\n Exibindo notas \n")
console.log(notas)

console.log("\n Média Aritmética ")
const total = notas.reduce((soma, atual) => soma + atual /3, 0)
console.log(total)


