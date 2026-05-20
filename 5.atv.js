// Quinta Atividade JS com retorno

const number = (a) => {
    if(a %2 === 0)
        return console.log(`É par.`)
    else
        return console.log(`É impar.`)
}

let num = 10
const numero = number(num)
console.log(`Number: ${num}`)