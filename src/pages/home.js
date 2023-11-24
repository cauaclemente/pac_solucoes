import React from "react";
import './layout.css';
import Content from "../../src/components/content/content";
import Formulario from "../../src/components/contato/formulario";
import Empresa from "../../src/components/empresa/empresa";
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
            <a href="https://api.whatsapp.com/send?phone=5511980249542&text=Ol%C3%A1%20Carol,%20gostaria%20de%20fazer%20um%20or%C3%A7amento" 
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
