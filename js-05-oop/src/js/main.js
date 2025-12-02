// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

const guestList=["Polo","Mauricio"];
guestList.push("José");//2
console.log(guestList);
guestList.unshift("Carlos")//3
console.log(guestList);

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

const arraytaskList=[];
arraytaskList.push("Tarea 1");
arraytaskList.push("Tarea 2");
arraytaskList.push("Tarea 3");

console.log(`La lista de Tareas es : ${arraytaskList}`);

console.log(`Tarea elimida: ${arraytaskList.pop()}`);

let urgente="Tarea URGENTE";

arraytaskList.unshift(urgente);
console.log(`Lista de tareas actualizada: ${arraytaskList}`);//5

arraytaskList.shift();
console.log(`Tarea urgente atendida: ${arraytaskList}`);