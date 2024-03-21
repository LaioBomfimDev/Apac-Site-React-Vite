import '../css/style3.css'
import Rodape from './rodape';

function AjudeAgente() {
       
  return(
 <div> 
    <div className="foraAjude">
        <div className="textAjude">
            <h10>Quer ajudar?</h10>
            <br></br>
            <h9>Sua doação
            É A ESPERANÇA PARA CENTENAS DE ANIMAIS ABANDONADOS!</h9>
        </div>
        <div className="botoesVolunts">
        
        <button className='buttonAjuda'>
        <a href="https://api.whatsapp.com/send?phone=5571999575358&text=Ol%C3%A1,%20vi%20seu%20site%20e%20gostaria%20de%20doar%20PRODUTOS%20para%20a%20sua%20causa.%20Que%20tipo%20de%20produtos%20voc%C3%AAs%20aceitam?%20Em%20qual%20local%20posso%20entregar?%20Aguardo%20seu%20retorno!">
  Quero doar PRODUTO
  </a>
</button>
<button className='buttonAjuda'>
<a href="https://api.whatsapp.com/send?phone=5571999575358&text=Ol%C3%A1,%20vi%20seu%20site%20e%20gostaria%20de%20fazer%20uma%20DOA%C3%87%C3%83O%20EM%20DINHEIRO%20para%20a%20sua%20causa.%20Como%20posso%20fazer%20a%20doa%C3%A7%C3%A3o?%20Quais%20s%C3%A3o%20as%20formas%20de%20pagamento?%20Aguardo%20seu%20retorno!">
  Quero doar DINHEIRO
  </a>
</button>
<button className='buttonAjuda'>
<a href="https://api.whatsapp.com/send?phone=5571999575358&text=Ol%C3%A1,%20vi%20seu%20site%20e%20gostaria%20de%20ser%20um%20VOLUNT%C3%81RIO%20na%20sua%20organiza%C3%A7%C3%A3o.%20Quais%20s%C3%A3o%20as%20%C3%A1reas%20de%20atua%C3%A7%C3%A3o%20que%20voc%C3%AAs%20precisam%20de%20ajuda?%20Quais%20s%C3%A3o%20os%20requisitos%20para%20ser%20volunt%C3%A1rio?%20Aguardo%20seu%20retorno!">
  Quero ser VOLUNTÁRIO
  </a>
</button>
<button className='buttonAjuda'>
<a href="https://api.whatsapp.com/send?phone=5571999575358&text=Ol%C3%A1,%20vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20ABRIGO%20SOLID%C3%81RIO.%20Voc%C3%AAs%20t%C3%AAm%20animais%20dispon%C3%ADveis%20para%20ado%C3%A7%C3%A3o?%20Quais%20s%C3%A3o%20os%20requisitos%20para%20ado%C3%A7%C3%A3o?%20Aguardo%20seu%20retorno!">
  Abrigo solidário
  </a>
</button>
        </div>
        <div className="qrcod">
        
            <img src="qrcod.jpg" alt="qrcod" className='imgQrcod'/>
            <h1>chave pix:
                apaccatubahia@gmail.com 
                CNPJ: 36.515.091/0001/45
            </h1>
        </div>
    </div >
<div className="textDown" >
    <h1>APAC: Amor, Proteção e Ação para os Animais.</h1>
</div>

    <Rodape/>
    </div>
);

}   export default AjudeAgente