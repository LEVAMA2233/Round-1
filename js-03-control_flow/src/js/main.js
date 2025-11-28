
const temperatura=(t=18)=>
    {
        if (t>25 && t<=34)
            {
                return "Hace calorsss y da sed de la mala :P";
            }
        else if(t==18)
        {
            return "Hoy la temperatura es perfecta";
        }
        else if(t>35)
        {
            return "CALOR EXTREMO!!! SAL DE AHÍ ESPONJA"
        }
        else 
        {
            return "Hace friyito"
        }
    };
    
console.log(temperatura(52));


const weatherForecast=weathercode=>{
    let respuesta;
    switch(weathercode)
    {
        case 0:
            respuesta="Clear Sky";
            break;
        case 1,2,3:
            respuesta="Mainly clear, partly cloudy, and overcasr";
            break;
        case 45,48:
            respuesta="Fog and deposting rime frog";
            break;
    }
    return respuesta;
}

console.log(weatherForecast(3));