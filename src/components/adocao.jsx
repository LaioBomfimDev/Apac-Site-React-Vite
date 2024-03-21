import '../css/style3.css'
import GaleriaDog from './Galeriadog';
import GaleriaGato from './Galeriagato';
import React, { useState, useEffect } from "react";
import Rodape from './rodape';


function Adote(){

    const [secaoAtual, setSecaoAtual] = useState('home');

    const cliqueSecao =(secao) => {
        setSecaoAtual(secao);
};
    return(
       
        <>
        <div className="abaAdote">
                <div className='textAdot'>
                    <h1>Ajude uma vida</h1>
                    <h2>"O amor pelos animais é um dos mais nobres sentimentos que o ser humano pode ter." 
- Charles Darwin</h2>
                </div>
                <div className='foraAdote'>
                    
                <div className='adoteDog'>
                <button onClick={() =>cliqueSecao('parceiro')} className='botao-adote'>
                 <img src="CACHORRO.jpg" alt="" className='imgHome' /> 
                 </button>
                         </div>

                         <div className='adoteCat'>
                <button onClick={() =>cliqueSecao('conheca')} className='botao-adote'>
                 <img src="GATO.jpg" alt="" className='imgHome' /> 
                 </button>
                         </div>
            </div>
        </div>

             <div>
        {secaoAtual === "parceiro" && (
          <div div className="secao">
            <GaleriaDog />
            </div>
        )}
     
        {secaoAtual === 'conheca' && (
            <div className='secao'>
            <GaleriaGato/>
            {}
        </div> 
      
    )}
      </div>        
        <div className='textQuestion'>
                <h1>Missão da APAC </h1>
                <h1>Desenvolver e executar ações para a promoção da convivência ética, responsável e sustentável entre as pessoas, os animais e o meio ambiente.</h1>
            </div>
            <Rodape/>
    </>
    
);

} 
export default Adote;