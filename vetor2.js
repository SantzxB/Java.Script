
const VetorNumeros = [4, 6, 90, 100, 82]
console.log("\n Todos os elementos do vetor:")
console.log(VetorNumeros)
console.log("\nExibindo apenas o terceiro elemento ")
console.log(VetorNumeros[2])

console.log("\nExibindo apenas o quarto elemento: ")
console.log(VetorNumeros[3])

console.log('\nAdicionando um elemento no final do vetor: ')
VetorNumeros.push(60)
console.log(VetorNumeros)

console.log("\nAdicionando um elemento no inicio do vetor: ")
VetorNumeros.unshift(0)
console.log(VetorNumeros)

// REMOVA APENAS O ÚLTIMO ELEMENTO DO VETOR:

console.log("\n Removendo Ultimo elemento do vetor:")
VetorNumeros.pop()
console.log(VetorNumeros)

console.log("\n Removendo primeiro elemento do vetor:")
VetorNumeros.shift()
console.log(VetorNumeros)