// Setima atividade JS
let numeros = [10, 8, 4, 9, 2, 5];

let pares = 0;
let impares = 0;

for (let i = 0; i < 6; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Quantidade de pares:", pares);
console.log("Quantidade de ímpares:", impares);
