import React, {useState, useEffect} from "react";

function Slidenoticias(){

    const imagens = ['resgate1.jpg','resgate2.jpg','resgate3.jpg','resgate4.jpg','resgate5.jpg'];
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const interval = setInterval(proximoSlide, 700);


        return() => clearInterval(interval);
    }, [indiceAtual]);
   
    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    };

    return(
        <div className='fundonoticias'>
        <h1>Veja os resgates</h1>
        <div className="eventApac">
            <img src={imagens[indiceAtual]} className="SlideAuto" alt={`Imagem ${indiceAtual + 1 }`} /> 
            </div> 
        </div>
    );
}
export default Slidenoticias;
