//Funciones

//1
function resta(a,b){
    return a-b
}
console.log(resta(9,3));
//2
function profesorGuay() {
    let nota = parseInt(prompt("Introduce una nota del 0 al 10:"));

    switch (true) {
        case (nota >= 0 && nota < 5):
            return "Insuficiente.";
        case (nota >= 5 && nota < 7):
            return "Suficiente.";
        case (nota >= 7 && nota < 9):
            return "Notable.";
        case (nota >= 9 && nota <= 10):
            return "Sobresaliente.";
        default:
            return "Nota no válida. Debe estar entre 0 y 10.";
    }
}console.log(profesorGuay())
//3
function duplicaNumero(numero){
    if(typeof numero ==='number'){
        return numero*2
    } else{
        return 'Debo ser ejecutada con un número'
    }
}
console.log(duplicaNumero(8))
console.log(duplicaNumero("guay"))
//4
function caracterInicial(texto){
    if(texto.length === 0){
        return "Debo ser ejecutada con un string no vacío"
    }
    else if(typeof texto !== "string"){
        return "Debo ser ejecutada cin un string"
    }else(typeof texto === "string")
        return texto.charAt(0)
}
console.log(caracterInicial("Pato"))
console.log(caracterInicial(""))
console.log(caracterInicial(9))
//5
function ultimoCaracter (caracteres){
if(caracteres.length === 0){
    return "Debo ser ejecutada con un string no vacío"
}
else if(typeof caracteres !== "string"){
    return "Debo ser ejecutada cin un string"
}else(typeof caracteres === "string")
    return caracteres.charAt(caracteres.length-1)

}
console.log(ultimoCaracter("Pato"))
console.log(ultimoCaracter(""))
console.log(ultimoCaracter(9))
//6
function cuentaCaracteres(letras){
    if (typeof letras !== "string"){
    return "Debo ser ejecutada cin un string"
    }else{
        return letras.length
    }
}
console.log(cuentaCaracteres("treinta"))
//7
function esPalindromo (a){
    if(typeof a == "string" && a.length>0){
        let z=a.split("").reverse().join("")
        if(z==a){
            return "Es un palindromo"
        }else{
            return"No es un palindromo"
        }
    }
}

/*function esPalindrom(cadena){
    let cadenaNormal = cadena.replace()
    let cadenaPal = cadenaNormal.split().reverse()
    if(typeof cadena !== "string" || cadena.length===0){
        return 'No es un formato correcto'
    }else{
        cadenaNormal===cadenaPal
    }
}
console.log(esPalindrom("somos"))
console.log(esPalindrom(9))*/
//no me sale
//8
function getPrecioMostrar(precio) {
    if (typeof precio !== "number") {
        return 'no es un formato correcto';
    }
    return precio.toFixed(2);
}
console.log(getPrecioMostrar(2))
console.log(getPrecioMostrar("ardilla"))
//9
function division(a, b) {
    return a / b;
}
console.log(division(9,3))
//10
function matrizNumeros(array) {
    return array.filter(num => num >= 5);
}
console.log(matrizNumeros([9,2,8,4]))
//11
function esPrimo() {
    let numero = prompt("Introduce un número:");
    a=+a
    if (typeof numero =="number") {
        let x=0;
    
    for (let i = 0; i <= numero; i++) {
        if (numero % i === 0) {
          x++
        }
        if (x==2){
            alert("Número primo")
        }
        else{
            alert("No número primo")
        }
    }
}
}
/*function primo() {
    num = +prompt("Give a primo baby: "); // the plus sign in front of prompt convert the string to a number
  
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // If divisible by any i, not a prime number
      }
    }
  
    return true; // If no divisors found, the number is prime
  }*/
  