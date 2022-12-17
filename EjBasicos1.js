/* 
* Ejercicio 1
* → Devuelve el string de mayor longitud
*/

// Declaramos un array -> Cambiar nombre de myArray al vuestro e introducimos valores
var joan = ['Madrid', 'Galicia', 'Cantabria', 'Catalunya', 'Aragón', 'Extremadura'];
// Declaramos una variable donde guardaremos el string mayor de nuestro myArray
var longestElement= '';
// PRIMERA ITERACIÓN: Recorrer el Array y comprobar la longitud de cada uno de ellos.
joan.forEach( (ciudad) => {
    // SEGUNDA ITERACIÓN: Si longestElement es mayor a relement cambiamos el valor de longestElement
        if(longestElement.length<ciudad.length) {
        longestElement = ciudad
    }
});
// TERCERA ITERACIÓN MOSTRAR EL ELEMENTO MAYOR
console.log(longestElement);

/* 
* Ejercicio 2
* → Devuelve si puedes conducir
*/

// PRIMERA ITERACIÓN: Declara variable age
let age = 17

// SEGUNDA ITERACIÓN: Comprobar con un condicional si puedes conducir
if (age>=18){
    console.log('Tienes edad suficiente para conducir, siempre y cuando tengas el carnet y todos los puntos')
}else{
    console.log('No tienes edad para sacarte el carnet de conducir, si conduces y te pillan, te empapelan')
}

// TERCERA ITERACIÓN: Mostrar si puede conducir o no

/* 
* Ejercicio 3
* → Quiero comer Pizza
*/

// PRIMERA ITERACIÓN: Declara variable con un listado de comidas

let comidas = ['macarrones', 'filete', 'pollo al ast', 'pizza']
let estoyDieta = true

// SEGUNDA ITERACIÓN: Recorrer el listado de comidas

for (const comida of comidas) {
    if (comida==='pizza'){
        if (estoyDieta){
            console.log('El sistema detecta que estás a dieta, no me puedes engañar: Te voy a servir un Brócoli delicioso')
        }else{
             console.log("Aquí tienes tu Pizza")
        }
       
    }
    
}

// TERCERA ITERACIÓN: Si hay pizza me sirves pizza 


// CUARTA ITERACIÓN: Declara variable estoy a dieta

// QUINTA ITERACIÓN: Cuando quiera pizza me sirves brocoli

/* 
* Ejercicio 3
* → E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R
*/

// PRIMERA ITERACIÓN: Declara variable con 'El rayo es el mejor'

// SEGUNDA ITERACIÓN: Pasa ese texto a mayúsculas -> MDN es vuestro amigo

// TERCERA ITERACIÓN: Modifica el string -> to array MDN 

// CUARTA ITERACIÓN: Añade un '-' después de cada elemento

// Devuelve en un string E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R

/* 
* Ejercicio 4
* → La piramide - imprime por consola:
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/

/* 
* Ejercicio 5
* → La piramide Invertida- imprime por consola:
999999999
88888888
7777777
666666
55555
4444
333
22
1
*/

/* 
* Ejercicio 6 - BONUS
* → Palíndromo: Esta función debe recibir un string y decir si es un palíndromo. 
* Un palíndromo es una frase que se lee igual al derecho que al revés.
*/

var palindrome = (word) => {
    // PRIMERA ITERACIÓN: declarar variable y pasarle el valor + toUpperCae + Eliminar espacios replace MDN
    var initialWord = word; // + toUpperCae + replace;
    // SEGUNDA ITERACIÓN: Hacer split + reverse + join MDN
    var reverseWord = initialWord //  Split into an array, Reverse array, Join array elements into string
    // TERCERA ITERACIÓN: Devolver true o false
    return initialWord === reverseWord ? true : false;  // check if word is palindrome
}
// CUARTA ITERACIÓN: Llamar a la función palindrome pasando una palabra o frase- 'Yo soy'
console.log(palindrome('Yo soy') ? 'es palíndromo' : 'NO es palíndromo');