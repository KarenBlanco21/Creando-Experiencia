let numero1 = promt("ingrese el 1° numero");
let operación = promt("ingrese una operacion");
let numero2 = prompt("ingrese el 2° numero");


let resultado;

if (operación == "+") {
    resultado = sumar(numero1+numero2);
}

else if (operación == "-") {
    resultado = resta(numero1-numero2);
}
else if (operación == "*") {
    resultado = multiplicar(numero1*numero2);
}
else if (operación == "/") {
    resultado = dividir(numero1/numero2);
}

mostrarResultado(resultado);