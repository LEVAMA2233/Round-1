
/**
 * Módulo para manejar formularios
 * @returns {object} objeto con los inputs del formulario
 */

const formHandler=(formReference)=>{
    /*
    const tasktitle=document.getElementById("taskTitle").value;
    return{
        tasktitle:tasktitle
    }*/
        const formData = new FormData( formReference );
        const data = Object.fromEntries( formData.entries() );
        return data;
}

export {formHandler};