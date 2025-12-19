


const setUpEvenListener=()=>{
    console.log("Event listener set up");
    //Manejo de formulario
    const taskForm=document.getElementById("task-form");
    taskForm.addEventListener("submit",(Event)=>{
        Event.preventDefault();
        console.log("Form submitted!");
    });
}

export {setUpEvenListener};