/**
 * Modifica el titulo principal de la página
 * @param {string} titleId -El ID del elemento del título a modificar
 */

const changePrincipalTittle=(titleId)=>{
    const titleElement=document.getElementById(titleId);
    if(titleElement!=null){
        titleElement.innerText="OOtro";
    }else{
        console.warn(`Element with id "${titleId}" not found.`);
    }
}


//Exporta la función para usarse en otros módulos
export{changePrincipalTittle};