import { BtnStyled } from './styles.js'
import { Text, StyleSheet } from 'react-native'

export default function Btn({ placeholder, onChange, style }) {

    return (
        <BtnStyled
            style={style ? style : BtnStyled}
            onChange={onChange}>
            <Text style={styles.heading1}>{placeholder}</Text>
        </BtnStyled>
    )
}

const styles = StyleSheet.create({
    heading1: {
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 24,
        color: '#FFF',
        fontFamily: 'PlusJakartaSans-Medium',
    }
})