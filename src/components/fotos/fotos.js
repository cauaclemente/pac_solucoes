import React from 'react';
import './fotos.css';
import Estacionamento from "../assets/epox-estacionamento.jpg";
import BanheiroGrande from "../assets/epoxi-banheiro-grande.jpg";
import Shopping from "../assets/epoxi-shopping.jpg";
import banheiroRosa from "../assets/epoxi-banheiro-rosa.jpg";
import Sala from "../assets/epoxi-sala.jpg";
import teto from "../assets/epoxi-teto.jpg";

function Fotos() {
    return (
        <>
            <div className="card-pai">
                <h1 className="text-fotos">Serviços já feitos por nós</h1>
                <div className="card-filho">
                    <div className="card">
                            <img src={teto} alt="teto" />
                    </div>       
                    <div className="card">
                        <img src={Estacionamento} alt="Foto de estacionamento" />
                        </div>
                    <div className="card">
                        <img src= {Shopping} alt="Banheiro grande" />
                        </div>
                    <div className="card">    
                        <img src={BanheiroGrande} alt="Shopping" />
                        </div>
                    <div className="card">    
                        <img src={banheiroRosa} alt="Banheiro rosa" />
                        </div>
                    <div className="card">    
                        <img src={Sala} alt="Sala" />
                        </div>
                </div>
            </div>
        </>
    )
}
export default Fotos;