import Gato from './gato'
import '../css/style3.css'

function GaleriaGato(){
    return(
        <section> 
            <h7>Abaixo irá encontrar o companheiro perfeito para você!</h7>  
        <div className="fora" >
            
        <div className="conteudo" >          
            <Gato
                content="sss"
                imageUrl="apacCat1.jpg" 
                title=" Lua: Misteriosa e elegante, adora observar o mundo do alto."
                altText= "cat"        
                />
            </div>
            <div className="conteudo" > 
            <Gato
                title="Simba: Majestoso e imponente, o verdadeiro rei da selva."
                imageUrl="apacCat2.jpg"
                altText= "cat"                
                content="texto sobre o gatin2"
                />
            </div>
            <div className="conteudo" > 
            <Gato
                title="Garfield: Preguiçoso e sarcástico, mas com um coração de ouro."
                imageUrl="apacCat3.jpg"
                altText= "cat"                
                content="txto sobre o gatin3e"
                />
            </div>
            <div className="conteudo" > 
            <Gato
                title="Mia: Elegante e independente, a rainha da casa."
                imageUrl="apacCat4.jpg"
                altText= "cat"                
                content="txto sobre o gatin3e"
                />
            </div>
           </div>  
           
           <div className="fora" >
        <div className="conteudo" >          
            <Gato
                title="Tom: Brincalhão e travesso, sempre em busca de uma aventura."
                imageUrl="apacCat5.jpg"
                altText= "cat"                
                content="texto sobre o gatin11"
                />
            </div>
            <div className="conteudo" > 
            <Gato
                title="Rivotril: Fofo e adorável, o companheiro perfeito para um cochilo."
                imageUrl="apacCat6.jpg"
                altText= "cat"                
                content="texto sobre o gatin12"
                />
            </div>
            <div className="conteudo" > 
            <Gato
                title="Oliver: Esperto e curioso, sempre explorando cada canto da casa. "
                imageUrl="apacCat7.jpg"
                altText= "cat"                
                content="texto sobre o gatin13"
                />
            </div>
            <div className="conteudo" > 
            <Gato
                title="Maya: Independente e charmosa, a gata que faz suas próprias regras."
                imageUrl="apacCat8.jpg"
                altText= "cat"                
                content="texto sobre o gatin12"
                />
            </div>
           </div>  
            <div className='textAnimals' >Ao adotar um animal, você não só estará ganhando um amigo fiel 
            e companheiro para toda vida, mas também estará salvando uma vida. Adote um animal e faça a diferença!</div>
        </section>
       
    );
} ;
export default GaleriaGato;