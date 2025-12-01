const arreglo=new Array(10);

// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento
const techStack = ["HTML", "CSS", "JavaScript"];

// Acceder al primer elemento
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"
//Accediendo al segundo elemento
console.log(`El segundo elemento es: ${techStack[1]}`);
console.log(`El ultimo elemento es: ${techStack[2]}`);

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