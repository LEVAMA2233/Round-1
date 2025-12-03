
import { changePrincipalTittle } from "./modules/changePrincipalTittle.js";
import { changeImage } from "./modules/changeLogo.js";
import { aliceUser } from "./modules/literalObject.js";
import { Usuario } from "../models/User.js";

changePrincipalTittle("title");
changeImage("cat.jpg");

/* 
ED modules-> Scope local->Lo que pasa en el archivo AY se queda
Ventajas de trabajar con ED Modules:
    1. Modularidad: Puedes dividir tu código en módulos más pequeños y manejables, 
    lo que facilita la organización y el mantenimiento del código.
    2. Reutilización: Puedes reutilizar módulos en diferentes partes de
     tu aplicación o incluso en diferentes proyectos, lo que ahorra tiempo y esfuerzo.
    3. Dependencias explícitas: Puedes declarar las dependencias de un módulo 
    de manera clara, lo que facilita la comprensión de cómo interactúan los diferentes módulos entre sí.
    4. Mejora del rendimiento: Los navegadores pueden cargar y ejecutar módulos 
    de manera más eficiente, ya que solo cargan los módulos necesarios cuando se requieren.
*/

console.log(aliceUser.getFullName());
console.log(aliceUser);
console.log(aliceUser.stringify());
