let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hello world';

function butConsole() {
    console.log('boton consola click');
}

function butPrompt(){
    let ciudad;

    ciudad = prompt('nombra una cuidad de brasil');

    alert(`Estuve en ${ciudad} y me acorde de tí <3 `);
}

function mensj(){
    alert('sabias que te amo?');
}

function sumacion(){
    let  numero1 = 0 , numero2 =0;
    numero1 = parseInt(prompt('ingresa el primer numero a sumar'));
    numero2 = parseInt(prompt('ingresa el segundo numero a sumar'));
    numero1 = numero1 + numero2;
    alert(numero1);
}

function holaMundo(prommedi,name1, name2,name3){
    name1 = parseInt(prompt(`numero 1`));
    name2 = parseInt(prompt(`numero 2`));
    name3 = parseInt(prompt(`numero 3`));
    prommedi = (name1+name2+name3)/3;
    console.log(prommedi);
}

function compara(mayor,numero1,numero2) {
    
    numero1= parseFloat(prompt('numero 1'));
    numero2= parseFloat(prompt('numero 2'));
    if (numero1 < numero2) {
        mayor = numero2;
    }
    else {
        mayor = numero1;
    }
    console.log(mayor)
    console.log((numero1>numero2)? numero1:numero2)
}

function cuadrada(numero){
    numero=parseInt(prompt('numero al cuadrado?'))
    alert(numero*numero)
}

//deafio Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function imc(peso,altura) {
    peso = parseFloat(prompt('ingrese el peso en kilogramos, por favor'))
    altura = parseFloat(prompt('ingrese la altura en metros, por favor'))
    peso = peso/(altura*altura);
    alert('Su Indice de Masa Corporal es: '+peso);
}
//desafo Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(numero=0, placeholder =0,exit= 0) {
    numero = parseInt(prompt('elige el numero para obtener su factorial'))
    placeholder = numero;
    while (numero > 1) {
        numero--;
        placeholder = placeholder * numero;
        exit++
        if (exit >= 50) {
            break;
        }
    }
    alert(`el factorial es ${placeholder}`)
}
//desafio Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function dolar(dolara=0, pesos=0) {
    dolara= parseFloat(prompt('cuantos dolares convertira a pesos?'))
    pesos = dolara *17
    alert (`${dolara}$ dolar${(dolara == 1)?' equivale':'es equivalen'} a ${pesos}$MX`)
}
//desafio Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaPeri(area,perimetro,altura,anchura) {
    altura=parseFloat(prompt('ingrese la altura del rectangulo'));
    anchura=parseFloat(prompt('ingrese la anchura del rectangulo'));
    area=altura*anchura;
    perimetro=(altura*2)+(anchura*2);
    alert(`El area de su rectangulo es: ${area} y tiene un perimetro de ${perimetro}`);
}
//desafio Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function milti(cosa,cual) {
    return cual+':'+(cosa*cual);
}
function tabla() {
    let numero =0;
    numero=parseInt(prompt('ingrese el numero del que desea la tabla de multiplicar'))
    alert(`La tabla de multiplciar del numero ${numero} es ${milti(numero, 1)} ${milti(numero, 2)} ${milti(numero, 3)} ${milti(numero, 4)} ${milti(numero, 5)} ${milti(numero, 6)} ${milti(numero, 7)} ${milti(numero, 8)} ${milti(numero, 9)} ${milti(numero, 10)} y su cuadrado es ${numero*numero}`);
}
//desafio Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//desfio Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
//desafio Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java','Ruby','GoLang');
//desafio Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function muestrs() {
    console.log(lenguagesDeProgramacion);
    alert(lenguagesDeProgramacion);
}
            //muestra algo en un alert y console log
function alertConsol(alertar) {
    console.log(alertar);
    alert(alertar);
}
//desafio Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mestraInerso() {
    let lenguagesRevProgramacion = lenguagesDeProgramacion.slice().reverse();
    alertConsol(lenguagesRevProgramacion);
}
//desafio Crea una función que calcule el promedio de los elementos en una lista de números.
function promedio() {
    var numerosprom = [];
    var cantidad = parseInt(prompt('De cuántos números obtendrá el promedio?'));
    console.log(cantidad);
    var resultado = 0;
    return calculoPromedio(numerosprom, cantidad, resultado);
}
    //suma de una lista
function calculoPromedio(numerosprom, cantidad, resultado) {
    numerosprom.push(parseInt(prompt(`Ingrese el número N°${numerosprom.length + 1}`)))
    console.log(numerosprom)

    if (numerosprom.length === cantidad) {
        resultado = (numerosprom.reduce((acumulador, numero) => acumulador + numero, 0)) / numerosprom.length;
        alertConsol(resultado);
        return resultado;
    } else {
        return calculoPromedio(numerosprom, cantidad, resultado);
    }
}
//desafio Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numerosExtremo() {
    var listaNumeros =[];
    return calculoExtremo(listaNumeros);
}
function calculoExtremo(listaNumeros) {
   /* listaNumeros.push(prompt(`Ingrese el ${(listaNumeros.length == 1)? 'primer numero': `dato N°${listaNumeros.length +1}`} de los que desea saber el maximo y minimo. En caso de no tener mas numeros escriba fin`))
    console.log(listaNumeros)
    if (listaNumeros.find('fin')) {
        listaNumeros.pop();
        parseInt(listaNumeros);
        alertConsol('El numero mayor es: '+Math.max(listaNumeros)+' y el menor es '+Math.min(listaNumeros));
        return ('El numero mayor es: '+Math.max(listaNumeros)+' y el menor es '+Math.min(listaNumeros));
    } else {
        return calculoExtremo(listaNumeros)  
    }*/
var entrada = prompt(`Ingrese el ${(listaNumeros.length === 0) ? 'primer número' : `dato N°${listaNumeros.length + 1}`} de los que desea saber el máximo y mínimo. En caso de no tener más números, escriba fin`);
        
    if (entrada.toLowerCase() === 'fin') {
        if (listaNumeros.length > 0) {
            // Convertir elementos de la lista a números
            listaNumeros = listaNumeros.map(numero => parseInt(numero));

            alertConsol('El número mayor es: ' + Math.max(...listaNumeros) + ' y el menor es ' + Math.min(...listaNumeros));
            return Math.max(...listaNumeros) + ' y el menor es '+Math.min(...listaNumeros);
        } else {
            alertConsol('No se ingresaron números.');
            return 'No se ingresaron números.';
        }
    } else {
        listaNumeros.push(entrada);
       console.log(listaNumeros);
      return calculoExtremo(listaNumeros);
    }
}
//desafio Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaList (){
    var listaNumeros =[];
    return sumaLista(listaNumeros);
}
function sumaLista(lista) {
    var entrada = prompt(`Ingrese el ${(lista.length === 0) ? 'primer número' : `dato N°${lista.length + 1}`} que desea sumar. En caso de no tener más números, escriba =`);
    let resultado  
    if (entrada.toLowerCase() === '=') {
        if (lista.length > 0) {
            // Convertir elementos de la lista a números
            lista = lista.map(numero => parseInt(numero));

            resultado = ('El resultado de la suma es: '+(lista.reduce((acumulador, numero) => acumulador + numero, 0)));
            alertConsol(resultado);
            return resultado;
        } else {
            alertConsol('No se ingresaron números.');
            return 'No se ingresaron números.';
        }
    } else {
        lista.push(entrada);
       console.log(lista);
      return sumaLista(lista);
    } 
}
