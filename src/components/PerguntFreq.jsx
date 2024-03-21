import '../css/style3.css'
import React, { useState } from 'react';



function AccordionApac() {
       
  return(
    <>
 <section class="perguntas">
    <div class="pergunta">
      <h8>Como posso adotar um animal?</h8>
      <h3>Para adotar um animal, você precisa seguir estes passos:</h3>
      <ol><h3>
        <li>Acesse nosso site e confira os animais disponíveis para adoção.</li>
        <li>Preencha o formulário de adoção online.</li>
        <li>Agende uma visita à nossa ONG para conhecer o animal.</li>
        <li>Se tudo der certo, você poderá levar o animal para casa!</li>
        </h3>
        </ol>
    </div>

    <div class="pergunta">
      <h8>Quais são os requisitos para adotar um animal?</h8>
      <h3>Para adotar um animal, você precisa:</h3>
      <ul> <h3>
        <li>Ter mais de 18 anos.</li>
        <li>Ter um documento de identidade válido.</li>
        <li>Comprovar renda.</li>
        <li>Ter um lar adequado para o animal.</li>
        <li>Responder um questionário sobre sua experiência com animais.</li>
    </h3>  </ul>
    </div>

    <div class="pergunta">
      <h8>Como posso ajudar a ONG?</h8>
      <h3>Existem várias maneiras de ajudar a nossa ONG:</h3>
      <ul> <h3>
        <li>Faça uma doação em dinheiro.</li>
        <li>Doe alimentos, ração, medicamentos ou outros itens.</li>
        <li>Seja um voluntário.</li>
        <li>Divulgue o trabalho da ONG nas suas redes sociais.</li>
        <li>Participe de eventos beneficentes.</li>
        </h3></ul>
    </div>
  </section>
  </>
  );
  } export default AccordionApac;