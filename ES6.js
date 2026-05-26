// Criandom um Vetor: 
const VetorNumeros = [1,2,3,45,6,75]

console.log("Listando todos os elementos do vetor:")
console.log(VetorNumeros)

console.log("\n Multiplicando cada elelemento do vetor por 2:")
const dobrados = VetorNumeros.map(n => n * 2 )
console.log(dobrados)

console.log("\n Filtrando elelemento pares:")
VetorNumeros.push(8)
VetorNumeros.push(142)
const pares = VetorNumeros.filter(n => n % 2 == 0)
console.log(pares)

console.log("\n Filtrando elelemento impares:")
VetorNumeros.push(1)
VetorNumeros.push(3)
const impares = VetorNumeros.filter(n => n % 2 == 1)
console.log(impares)

console.log("\n Filtrando elementos negativos")
VetorNumeros.push(-1, -67 , -702, -69)
const negativos = VetorNumeros.filter(n => n < 0 )
console.log(negativos)

console.log("\n Filtrando elementos positivos")
VetorNumeros.push(1001, 24 , 9000)
const positivos = VetorNumeros.filter(n => n > 0 )
console.log(positivos)

console.log("\n Somando todos os elementos do vetor: ")
const total = VetorNumeros.reduce((soma, atual) => soma + atual, 0)
console.log(total)

