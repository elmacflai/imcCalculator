// Función que calcule el IMC

function calculaIMC (peso, altura){
    const IMC = peso / altura ** 2;
    return IMC;

}

let IMC = calculaIMC(80, 1.80); 
console.log(IMC);