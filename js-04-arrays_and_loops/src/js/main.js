


console.log("Sesión JS-04: Arrays y Bucles");

/* ================================================================
   ARRAYS (ARREGLOS) 
   ================================================================
   Un Array es una estructura de datos que nos permite almacenar 
   múltiples valores en una sola variable.
   
   Analogía: Una cajonera donde cada cajón tiene un número (índice)
   para identificar qué hay dentro.
*/
const myArray = [true, 42, "Hola", null, { nombre: "Juan" }, [1, 2, 3 ]];

// --- 1. Definición ---
// Sintaxis moderna: Usamos corchetes [] (Array Literal)
// Nota: Usamos 'const' aunque el contenido cambie. Lo que es constante
// es la referencia en memoria, no los datos internoss> 


// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento


//Ingue su, vamos a hacer una matriz
//const matriz=[][]; No sirve, -1000 puntos a js

const matriz1=[];
const matriz2=[[1,2],[3,4]];
let columnas=2
let filas=3;
let contador=1;
for (let i = 0; i < columnas; i++) {
    matriz1[i] = []; 

    for (let j = 0; j < filas; j++) {
        matriz1[i][j] = contador; 
        contador++;
    }
}
console.log(matriz2);
console.log(matriz1);


const techStack = ["HTML", "CSS", "JavaScript"];

// Acceder al primer elemento
console.log( techStack.length ); // 3
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"

// Accediendo al segundo elemento
console.log(`Accediendo al segundo elemento: ${ techStack[1] }`);

// Acceder al último elemento (longitud - 1)
console.log(`Accediendo al último elemento: ${ techStack[ techStack.length - 1 ] }`);

// --- 3. Modificación de Elementos ---
techStack[1] = "Sass"; // Cambiando "CSS" por "Sass"
console.log("Después de la modificación:", techStack); // ["HTML", "Sass", "JavaScript"]

// Agregar un nuevo elemento al final
// techStack[3]
techStack[ techStack.length ] =  "TypeScript"; // ["HTML", "Sass", "JavaScript", "TypeScript"]


/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];

// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]

// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]


// --- Eliminar Elementos ---

// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);

// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"

