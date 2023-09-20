import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import cliente from "./assets/cliente.png"
import freelancer from "./assets/freela.png"
import { Link } from "../../componentes/Link/Link";
const SelecaoCliente = () => {
    return (
        <>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Como podemos te ajudar?
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <img src={cliente} alt="cliente" />
                    <Tipografia variante="body" componente="body">
                        Sou cliente e preciso de um freela!
                    </Tipografia>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freelancer} alt="freelancer" />
                    <Tipografia variante="body" componente="body">
                        Sou freela e preciso de cliente!
                    </Tipografia>
                </Col>
            </Row>
            <div style={{textAlign: 'center'}}>
                <Tipografia variante="body2" componente="body2">
                    Já tem conta?
                </Tipografia>
                <p>
                    <Link variante="secundaria">Faça login!</Link>
                </p>
            </div>
        </>
    )
}

export default SelecaoCliente;