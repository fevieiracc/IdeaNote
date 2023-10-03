import Btn from '../Btn/index'
import { BtnAreaStyled } from './styles.js'

export default function BtnArea() {
    return (
        <BtnAreaStyled>
            <Btn placeholder="Button 1"/>
            <Btn placeholder="Button 2"/>
        </BtnAreaStyled>
    )
}