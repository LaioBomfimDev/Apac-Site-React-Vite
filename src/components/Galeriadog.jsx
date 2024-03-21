import Cachorro from './cachorro'
import '../css/style3.css'

function GaleriaDog(){
    return(
        <section> 
            <h7>Abaixo irá encontrar o companheiro perfeito para você!</h7>  
        <div className="fora" >
                          

        <div className="conteudo" >  
            <Cachorro
                content="texto sobre o doguinho12"
                imageUrl="apacDog1.jpg" 
                title="Max: Aventureiro e brincalhão, sempre pronto para uma nova expedição."
                altText= "dog"        
                />
            </div>
            <div className="conteudo" > 
            <Cachorro
                title="Toby: Leal e obediente, o companheiro perfeito para qualquer aventura."
                imageUrl="apacDog2.jpg"
                altText= "dog"                
                content="texto sobre o doguinho2"
                />
            </div>
            <div className="conteudo" > 
            <Cachorro
                title="Luna: Esperta e curiosa, adora explorar cada canto da casa. "
                imageUrl="apacDog3.jpg"
                altText= "dog"                
                content="texto sobre o doguinho3"
                />
            </div>
            <div className="conteudo" > 
            <Cachorro
                title="Online: Amigável e dócil, a melhor amiga para todas as horas."
                imageUrl="apacDog9.jpg"
                altText= "dog"                
                content="texto sobre o doguinho3"
                />
            </div>
           </div>  
           
           <div className="fora" >
        <div className="conteudo" >          
            <Cachorro
                title="Marley: Energético e divertido, sempre pronto para uma boa brincadeira."
                imageUrl="apacDog5.jpg"
                altText= "dog"                
                content="texto sobre o doguinho11"
                />
            </div>
            <div className="conteudo" > 
            <Cachorro
                title="Rex: Protetor e corajoso, o guardião ideal da sua família."
                imageUrl="apacDog6.jpg"
                altText= "dog"                
                content="texto sobre o doguinho12"
                />
            </div>
            <div className="conteudo" > 
            <Cachorro
                title="Offline: Doce e carinhosa, a companhia perfeita para relaxar."
                imageUrl="apacDog7.jpg"
                altText= "dog"                
                content="texto sobre o doguinho13"
                />
            </div>
            <div className="conteudo" > 
            <Cachorro
                title="Lisa: A cachorrinha mais dócil do mundo"
                imageUrl="apacDog8.jpg"
                altText= "dog"                
                content="texto sobre o doguinho3"
                />
            </div>
            
           </div>   
            <div className='textAnimals' >Ao adotar um animal, você não só estará ganhando um amigo fiel 
            e companheiro para toda vida, mas também estará salvando uma vida. Adote um animal e faça a diferença!</div>
        </section>
       
    );
} ;
export default GaleriaDog;