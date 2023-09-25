import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const usuarioInicial = {
    perfil: '',
    interesse: '',
    nomeCompleto: '',
    uf: '',
    cidade: '',
    email: '',
    senha: '',
    senhaConfirmada: ''
}

const erros = {
    nomeErro: 'Insira um nome válido.',
    ufErro: 'Selecione um estado válida.',
    cidadeErro: 'Insira uma cidade válida.',
    senhaErro: 'Sua senha deve conter 8 ou mais caracteres.',
    senhaConfirmadaErro: 'As duas senhas não são as mesmas.'
}

export const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    erro: erros,
    setPerfil: () => null,
    setInteresse: () => null,
    setNomeCompleto: () => null,
    setUf: () => null,
    setCidade: () => null,
    setEmail: () => null,
    setSenha: () => null,
    setSenhaConfirmada: () => null,
    submeterUsuario: () => null,
    possoSelecionarInteresse: () => null,
    possoCadastrarDadosPessoais: () => null
});

export const useCadastroUsuarioContext = () => {
    return useContext(CadastroUsuarioContext);
}

export const CadastroUsuarioProvider = ({ children }) => {

    const navigate = useNavigate()

    const [usuario, setUsuario] = useState(usuarioInicial);

    // recebe o perfil como parâmetro, atualizando o estado do usuário, copiando todos os dados anteriores, mas modificando o perfil. Isso será feito para todas as funções dedicadas a alterar o dado do usuário, copiando todos os dados anteriores, e modificando o dado específico. 
    const setPerfil = (perfil) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                perfil
            }
        })
    }
    const setInteresse = (interesse) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                interesse
            }
        })
    }
    const setNomeCompleto = (nomeCompleto) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                nomeCompleto
            }
        })
    }
    const setUf = (uf) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                uf
            }
        })
    }
    const setCidade = (cidade) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                cidade
            }
        })
    }
    const setEmail = (email) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                email
            }
        })
    }
    const setSenha = (senha) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senha
            }
        })
    }
    const setSenhaConfirmada = (senhaConfirmada) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senhaConfirmada
            }
        })
    }
    const submeterUsuario = () => {
        if (usuario.nome === '') {
            return erros.nomeErro
        }
        if (!usuario.cidade === '') {
            return erros.cidadeErro
        }
        if (!usuario.uf) {
            return erros.ufErro
        }
        if (usuario.senha.length < 8) {
            return erros.senhaErro
        }
        if (usuario.senhaConfirmada !== usuario.senha) {
            return erros.senhaConfirmadaErro
        }
        console.log(usuario);
        navigate('/cadastro/concluido');
    }
    const possoSelecionarInteresse = () => {
        // se o usuario.perfil for uma string vazia (undefined), retorna false. Caso contrário, retorna true. 
        return !!usuario.perfil
    }

    const possoCadastrarDadosPessoais = () => {
        // se o usuario.interesse for uma string vazia (undefined), retorna false. Caso contrário, retorna true. 
        return !!usuario.interesse
    }

    const context = {
        usuario,
        setPerfil,
        setInteresse,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
        submeterUsuario,
        possoSelecionarInteresse,
        possoCadastrarDadosPessoais
    }
    return (
        <CadastroUsuarioContext.Provider value={context}>
            {children}
        </CadastroUsuarioContext.Provider>
    )
}