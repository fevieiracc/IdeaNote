import { PrimaryBtnStyled } from './styles.js'
import { Text, StyleSheet } from 'react-native'

export default function PrimaryBtn({ placeholder }) {

    return (
        <PrimaryBtnStyled>
            <Text style={styles.PlaceholderStyle}>{placeholder}</Text>
        </PrimaryBtnStyled>
    )
}

const styles = StyleSheet.create({
    PlaceholderStyle: {
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 24,
        color: '#FFF',
    }
})