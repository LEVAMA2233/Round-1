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

export{changeImage}