import { InputAreaStyled } from './styles.js'
import { InputText } from '../InputText/index.js'

export default function InputArea() {
    return (
        <InputAreaStyled>
            <InputText placeholder="E-mail" />
            <InputText placeholder="Senha" />
        </InputAreaStyled>

    )
}