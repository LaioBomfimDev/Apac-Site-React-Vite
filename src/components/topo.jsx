import React, {useState, useEffect} from "react";
import '../css/style3.css'
import Adote from './adocao'
import Galeriadog from './Galeriadog'
import GaleriaGato from './Galeriagato'
import Slideshow from './Slide'
import SlideNoticias from './Slideapac'
import AjudeAgente from './Ajudenos'
import AccordionApac from './PerguntFreq'
import Rodape from "./rodape";

function Topo(){
  
    const [secaoAtual, setSecaoAtual] = useState('home');

    const cliqueSecao =(secao) => {
        setSecaoAtual(secao);
    };
    return(
        <header>
            <div className='logotipo' >
            <img src="logoapac.png" alt="logo" className='imgLogo'/>
            </div>

            <nav>
                <ul>
                
                <li onClick={() =>cliqueSecao('home')} className='botao-menu' style={{fontWeight: 'bold'}}>HOME</li>
                <li onClick={() =>cliqueSecao('ajude')} className='botao-menu' style={{fontWeight: 'bold'}}>AJUDE-NOS</li>
                <li onClick={() =>cliqueSecao('eventos')} className='botao-menu' style={{fontWeight: 'bold'}}>EVENTOS</li>
                <li onClick={() =>cliqueSecao('pergunta')} className='botao-menu' style={{fontWeight: 'bold'}}>PERGUNTAS?</li>
              </ul>

            </nav>
                    <div className='nomeApac' >
            <img src="associa.png" alt="logo" className='imgNome'/>
            </div>
        
    <div>
        {secaoAtual === 'home' && (
            <div className='secao'>
                <Adote/>
                
                {}
    </div>
        )}
       
        {secaoAtual === 'ajude' && (
            <div className='secao'>
                <AjudeAgente/>
                
                {}
    </div>
        )}
                
        {secaoAtual === 'eventos' && (
            <div className='secao'>

                <div className="foraAnuncios" >
               <div className="slidePass" >
                <Slideshow/>
                </div>
                <div className="slideAuto" >  
                <SlideNoticias/>
                </div>
                {}
                </div>
                <Rodape/>
    </div>
        )}
        {secaoAtual === 'conheca' && (
            <div className='secao'>
                <GaleriaGato/>
                {}
    </div>
        )}
        {secaoAtual === 'parceiro' && (
            <div className='secao'>
                <Galeriadog/>
                {}
    </div>
    )}

        {secaoAtual === 'pergunta' && (
            <div className='secao'>
                <AccordionApac/>
                <Rodape/>
                {}
    </div>
    )}
    </div>
    
    </header>
    );
}
export default Topo;