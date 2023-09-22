import styled from "@emotion/styled"
import clienteConcluido from "./assets/cliente-concluido.png"
import { Botao } from "../../componentes/Botao/Botao"
import { Link } from "react-router-dom"
import CabecalhoCadastro from "./CabecalhoCadastro"

const ContainerConcluido = styled.div`
    padding: 0 ${props => props.theme.espacamentos.l};
    text-align: center;
`

const ImageConcluido = styled.img`
    width: 100%;
    border-radius: ${props => props.theme.espacamentos.s};
    margin-bottom: ${props => props.theme.espacamentos.l};

`

const Concluido = () => {
    return (
        <>
            <ContainerConcluido>
                <CabecalhoCadastro titulo="Seu perfil está completo!" descricao="Agora é só começar a se conectar com os melhores freelancers do mercado!"/>
                <ImageConcluido src={clienteConcluido} alt="cliente concluido" />
                <Link to=".."> 
                    <Botao variante="secundaria">
                        Voltar para a home
                    </Botao>
                </Link>
            </ContainerConcluido>
        </>
    )
}

export default Concluido;