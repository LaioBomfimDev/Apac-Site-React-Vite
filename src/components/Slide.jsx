import React, { useState, useEffect } from 'react';
import '../css/style3.css'

function Slideshow() {
    const imagens = ['noticia1.png', 'noticia2.jpg','noticia3.jpg','noticia4.jpg','noticia5.png' ];
    const [indiceAtual, setIndiceAtual] = useState(0);

const proximoSlide = () => {
    setIndiceAtual ((prevIndice) => (prevIndice + 1) % imagens.length);
};

return (
    <div className='fundonoticias'>
        <h1>Acompanhe as ultimas noticias!</h1>
    <div className='noticias'>
        
        <img src={imagens[indiceAtual]}  alt={`Imagem ${indiceAtual + 1}`} className='imgNoticias' />
        
        </div>
        <button onClick={proximoSlide} className='botao-setaEsquerda'></button> 
        </div>
);
}

export default Slideshow;