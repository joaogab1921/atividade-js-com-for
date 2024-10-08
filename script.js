/*1-
let numero = parseInt(prompt("Digite um número:"));
console.log("Tabuada do " + numero + ":");
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
2-
for (let numero = 1; numero <= 9; numero++) {
    console.log("Tabuada do " + numero + ":");
    for (var i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
    console.log("---------------------"); 
}
3-
let soma = 0;
let numero;

do {
    numero = parseInt(prompt("Digite um número positivo (0 para encerrar):"));
    if (numero > 0) {
        soma += numero;
    }
} while (numero !== 0);

console.log("Somatório: " + soma);
4-
let numeroFatorial = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

for (var i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
}

console.log("Fatorial de " + numeroFatorial + " é " + fatorial);
*/