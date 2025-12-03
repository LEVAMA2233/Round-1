
// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

/*
const guestList=["Polo","Mauricio"];
guestList.push("José");//2
console.log(guestList);
guestList.unshift("Carlos")//3
console.log(guestList);
*/

/* 
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   4. No dan una tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/
/*
const arraytaskList=[];
arraytaskList.push("Tarea 1");
arraytaskList.push("Tarea 2");
arraytaskList.push("Tarea 3");

console.log(`La lista de Tareas es : ${arraytaskList}`);

console.log(`Tarea elimida: ${arraytaskList.pop()}`);

let urgente="Tarea URGENTE";

arraytaskList.unshift(urgente);
console.log(`Lista de tareas actualizada: ${arraytaskList}`);//5

arraytaskList.shift();//6
console.log(`Tarea urgente atendida: ${arraytaskList}`);
*/

// TODO: RETO FINAL (Simulación de Cajero)
// Tienes un array de movimientos: [100.00, -50.00, 200.00, -100.00]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.
/*
const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;

let i=0;
//Recorremos los movimientos
for(;i<transactions.length;i++)
{

  console.log(`Tus movimientos son: Movimiento:${i+1} ${transactions[i]}\n`);
  totalBalance+=transactions[i];

}

console.log(`Balance final de transacciones: ${totalBalance}`);
*/

document.getElementById("title").innerText = "OOP in JavaScript, Cohorte 62";

console.log(`Datos del arreglo participants desde main.js:`, participants); // ['Alice', 'Bob', 'Charlie']

