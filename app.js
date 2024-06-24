let secretNum = 0;
let attemps = 0;
let listNumbers = [];
// [] array vacio
let maxNumber = 10;


function textElement(element, text) {
    /*element y text parámetros permiten que la función sea genérica 
    y pueda ser utilizada para asignar texto a cualquier elemento HTML*/
    let elementHTML = document.querySelector(element);
    /*
    -el document es un objeto que representa toda la estructura HTML de nuestra pagina wed y nos permite acceder a
    sus elementos, es un puente 
    -el método querySelector() nos permiete seleccionar un elemento del DOM utilizando un selcetor css
    */
    elementHTML.innerHTML = text;
    //innerHTML nos permite acceder y modificar el contenido del HTML interno de un elemto
    return;
};

function verifyAttempt() {
    /*un funcion  es un bloque de codigo reutilizable que realiza una tarea especifica.
    Sirve para encapsular lógica y hacerla más modular y organizada.*/
    let userNumber = parseInt(document.getElementById('userValue').value)
    //Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
    console.log(secretNum)
    if (userNumber === secretNum) {
        textElement('p',`Acertaste el numero en ${attemps} ${(attemps === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
        } else {
        if (userNumber > secretNum){
            textElement('p','El numero es menor')
        } else {
            textElement('p','El numero es mayor')
        };
        attemps++;
        clean();
    };
    /*
    getElementById() es una función nativa de JavaScript que se utiliza para seleccionar un elemento del DOM 
    a partir de su identificador único, el id
    */
    return;
};


function clean() {
    document.querySelector('#userValue').value ='';
}

function secretNumber () {
    let numberGen = Math.floor(Math.random()*maxNumber)+1;
    console.log(numberGen)
    console.log(listNumbers)

    if (listNumbers.length == maxNumber) {
        textElement('p','Ya se sortearon todos mlos numeros posibles')
    } else{
        if (listNumbers.includes(numberGen)) {
            return numberGen()
        }else {
            listNumbers.push(numberGen)
            //push() es uno de los métodos más utilizados para agregar elementos al final de un arreglo o lista en JavaScrip
            return numberGen;
        };
    };
};
function conditions(){
    textElement('h1', 'Adivina el número secreto')
    textElement('p', `ingresa un numero del 1 al ${maxNumber}`)
    secretNum = secretNumber();
    attemps = 1;
}
function restart(){
    clean();
    conditions()
    document.querySelector('#reiniciar').setAttribute('disabled','true')
};

conditions()