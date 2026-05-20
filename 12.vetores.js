// Vetores - Arrays

const vetorNomes = ['Marta', 'José', 'Maria']
console.log(`Exibindo todos os elementos`)
console.log(vetorNomes)

console.log("Exibindo primeiro elemento")
console.log(vetorNomes[0])

console.log('\n Adicionando um elemento no final do vetor')
vetorNomes.push('Mariana')

console.log('\n Adicionando um elemento no inicio do vetor')
vetorNomes.unshift('Fabiana')
console.log(vetorNomes)

console.log('\nRemovendo o primeiro elemento do vetor: ')
vetorNomes.shift()
console.log(vetorNomes)

console. log('\nRemovendo o ultimo elemento do vetor; ')
vetorNomes.pop()
console. log(vetorNomes)

console.log('\nLaco de repeticao para percorrer todo o yetor: ')
console.log('Índice: Nome')
vetorNomes.forEach((nome, index) => {
    console.log(`${index}: ${nome}`)
})