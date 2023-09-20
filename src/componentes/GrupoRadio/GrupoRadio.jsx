import RadioBotao from "./RadioBotao/RadioBotao"


const GrupoRadio = ({ opcoes, valor, onChange }) => {
    return (
        <div>
            {opcoes.map((option) => (
                <RadioBotao
                    key={option.valor}
                    valor={option.valor}
                    label={option.label}
                    checked={option.valor === valor}
                    onClick={() => onChange(option.valor)}
                />
            ))}
        </div>
    );
};

export default GrupoRadio;


