import { InputAreaStyled } from './styles.js'
import InputComponent from "../InputText";

export default function InputArea() {
    return (
        <InputAreaStyled>
            <InputComponent placeholder="E-mail" />
            <InputComponent placeholder="Senha" />
        </InputAreaStyled>

    )
}