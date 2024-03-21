import React, {useState, useEffect} from "react";

function eventossApac(){

    const imagens = ['apacDog1.jpg','apacDog2.jpg'];
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const interval = setInterval(proximoSlide, 5000);


        return() => clearInterval(interval);
    }, [indiceAtual]);
   
    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    };

    return(
        <div className='fundonoticias'>
        <h1>Acompanhe as noticias!</h1>
        <div className="eventApac">
            <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1 }`} /> 
           
        </div>
        </div>
    );
}
export default eventossApac;
