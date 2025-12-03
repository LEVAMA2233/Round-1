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


/**
 * Modifica la imagen principal
 * @param {string} imageName -Nombre de la imagen que quermos dentro de la ruta 
 */
const changeImage=(imageName)=>{
    const imageElement=document.getElementById("logo");
    switch(imageName){
        case null:
            console.warn(`Element with id "${imageName}" not found.`);
            break;
        default:
            imageElement.src=`../assets/img/${imageName}`;
    }

}




//Exporta la función para usarse en otros módulos
export{changePrincipalTittle};
export{changeImage}