class Calculadora{
    constructor(){}
    sumar(x,y){
        return parseInt(x) + parseInt(y);
    }
    resta(x,y){
        return parseInt(x) - parseInt(y);
    }
    dividir(x,y){
        return parseInt(x) / parseInt(y);
    }
    multiplicar(x,y){
        return parseInt(x) * parseInt(y);
    }
}
alert("Que operacion desea realizar?:");
let operacion = prompt("1: suma, 2:resta, 3: multiplicar, 4: dividir");

const calculadora = new Calculadora();

if (operacion == 1){
    alert("Ingresa los numeros que queres sumar:");
    let num1 = prompt("Dame el primer numero:");
    let num2 = prompt("Dame el segundo numero:");
    let resultado = calculadora.sumar(num1, num2);
    alert(`El resultado de la operatoria es: ${resultado}`);
}

if (operacion == 2){
    alert("Ingresa los numeros que queres restar:");
    let num1 = prompt("Dame el primer numero:");
    let num2 = prompt("Dame el segundo numero:");
    let resultado = calculadora.resta(num1, num2);
    alert(`El resultado de la operatoria es: ${resultado}`);
}

if (operacion == 3){
    alert("Ingresa los numeros que queres multiplicar:");
    let num1 = prompt("Dame el primer numero:");
    let num2 = prompt("Dame el segundo numero:");
    let resultado = calculadora.multiplicar(num1, num2);
    alert(`El resultado de la operatoria es: ${resultado}`);
}

if (operacion == 4){
    alert("Ingresa los numeros que queres dividir:");
    let num1 = prompt("Dame el primer numero:");
    let num2 = prompt("Dame el segundo numero:");
    let resultado = calculadora.dividir(num1, num2);
    alert(`El resultado de la operatoria es: ${resultado}`);
}
