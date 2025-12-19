import navbar from "./components/navbar";
import { setUpEvenListener } from "./components/setupEvenListener.js";


const initApp = () => {
    console.log("App initialized");
    const navbarContainer=document.getElementById("main-header");
    navbarContainer.innerHTML=navbar();
    setUpEvenListener();
};
export { initApp }; // exportación nombrada