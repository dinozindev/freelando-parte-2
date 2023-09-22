import GrupoRadio from "../../componentes/GrupoRadio/GrupoRadio";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import CabecalhoCadastro from "./CabecalhoCadastro";
import { useCadastroUsuarioContext } from "../../context/CadastroUsuario";

const opcoes = [
    {
        valor: 1,
        label: 'TI e Programação'
    },
    {
        valor: 2,
        label: 'Design e Multimídia'
    },
    {
        valor: 3,
        label: 'Revisão'
    },
    {
        valor: 4,
        label: 'Tradução'
    },
    {
        valor: 5,
        label: 'Transcrição'
    },
    {
        valor: 6,
        label: 'Marketing'
    },
]

const Interesses = () => {
    // const [opcao, setOpcao] = useState('');

    // ao invés de usar o hook do useState, estaremos usando o usuario como estado, e a function setInteresse como setter para este estado. Quando uma opção for selecionada, atualiza o estado atual da propriedade interesse do usuario. 
    const {usuario, setInteresse} = useCadastroUsuarioContext();

    return (
        <>
            <CabecalhoCadastro titulo="Crie seu cadastro" subtitulo="Qual a área de interesse?"/>
            <div style={{ textAlign: 'center' }}>
                <GrupoRadio opcoes={opcoes} valor={usuario.interesse} onChange={setInteresse} />
                <Row style={{ paddingTop: '32px' }}>
                    <Col lg={6} md={6} sm={6}>
                        <div style={{ textAlign: 'left' }}>
                            <Link to="/cadastro">
                                <Botao variante="secundaria">
                                    Anterior
                                </Botao>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <div style={{ textAlign: 'right' }}>
                            <Link to="/cadastro/dados-pessoais">
                                <Botao>
                                    Próxima
                                </Botao>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Interesses;