import { formHandler } from "./form-handler.js";



const setUpEvenListener=()=>{
    /*
    console.log("Event listener set up");
    //Manejo de formulario
    
    const taskForm=document.getElementById("task-form");
    taskForm.addEventListener("submit",(Event)=>{
        Event.preventDefault();
        console.log("Form submitted!");
        const data=formHandler();
        console.table(data);
    });
}*/  

    const taskForm = document.querySelector("#task-form");

        taskForm.addEventListener("submit", (event) => {

            event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
            console.log("Form submitted!");
            const data = formHandler( taskForm );
            console.table( data );
    });
}


export {setUpEvenListener};