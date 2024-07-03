// Función que calcule el IMC

function calculaIMC (peso, altura){
    const IMC = peso / altura ** 2;
    return IMC;

}

let IMC = calculaIMC(80, 1.80); 
console.log(IMC);

const IMCcalculation = (peso, altura) => {

    return peso / altura ** 2;
    
}

console.log(IMCcalculation (80,1.80));

