import styled from "@emotion/styled"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import clienteConcluido from "./assets/cliente-concluido.png"
import { Botao } from "../../componentes/Botao/Botao"
import { Link } from "react-router-dom"

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
                <Tipografia variante="h1" componente="h1">
                    Seu perfil está completo!
                </Tipografia>
                <Tipografia variante="body" componente="body">
                    Agora é só começar a se conectar com os melhores freelancers do mercado!
                </Tipografia>
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