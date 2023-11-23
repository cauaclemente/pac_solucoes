import React from "react";
import './layout.css'
import Content from "../components/content";
import Formulario from "../components/formulario";
import Empresa from "../components/empresa";
import Fotos from "../components/fotos";




function Home1() {
    
    return (
      <>
        <section className='hero'>
          <div className="imagem">
            <h1 className='texto-principal'>Transformamos ambientes residenciais e comerciais com nossas tintas epóxi personalizadas,
              trazendo cores e resistência onde quer que você esteja
            </h1>
            <a href="https://chat.openai.com/" 
              class="button-contact" target="_blank" style={{ textDecoration: 'none' }}>
                 Faça o seu orçamento
            </a>
          </div>
        </section>   
        <br>
        </br>
        <Content />
       <br>
       </br>
       <Empresa />
       <Fotos />
       <br>
       </br>
        <Formulario />
    </>
    )
}


export default Home1;
