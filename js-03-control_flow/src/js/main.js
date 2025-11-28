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