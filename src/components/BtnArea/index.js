import PrimaryBtn from '../PrimaryBtn/index.js'
import SecondaryBtn from '../SecondaryBtn/index.js'
import { BtnAreaStyled } from './styles.js'

export default function BtnArea({BtnPrimary, BtnSecondary}) {
    return (
        <BtnAreaStyled>
            <PrimaryBtn placeholder={BtnPrimary}/>
            <SecondaryBtn placeholder={BtnSecondary}/>
        </BtnAreaStyled>
    )
}