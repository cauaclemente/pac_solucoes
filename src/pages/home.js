import React from "react";
import './layout.css'
import Content from "../../src/components/content/content";
import Formulario from "../../src/components/contato/formulario";
import Empresa from "../../src/components/empresa/empresa"
import Fotos from "../../src/components/fotos/fotos";
import Footer from "../../src/components/footer/footer"



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
       <Footer />
    </>
    )
}


export default Home1;
