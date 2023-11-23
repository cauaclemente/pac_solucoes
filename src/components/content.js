import Quarto from '../../src/assets/epoxi-quarto.jpg';
import Empresas from '../../src/assets/epoxi-empresa.jpg';
import Quadra from '../../src/assets/epox-quadra.jpg'

function Content() {
    return (
        <>
            <section classname="services">
                <div className="services-content">
                    <h1 className="serviço">Confira um pouco do nossos serviços!</h1>
                </div>
                <section className="exemplos">
                <div className="amostras">
                    <img id="foto-amostra" src={Quarto} alt="imagem de banheiro" />
                <div className="amostra-info">
                    <strong>A solução para a sua casa</strong>
                    </div>   
                </div>
                <div className="amostras">
                    <img id="foto-amostra" src={Empresas} alt="imagem de empresas" />
                <div className="amostra-info">
                    <strong>O chão ideal para a sua empresa </strong>
                    </div>
                </div>
                <div className="amostras">
                    <img id="foto-amostra" src={Quadra} alt="imagem de quadra" />
                <div className='amostra-info'>
                    <strong>Melhore a sua quadra poliesportiva</strong>
                </div>
                </div>
            </section>
            </section>
        </>
    )
}
export default Content;