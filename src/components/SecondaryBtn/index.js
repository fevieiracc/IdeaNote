import { SecondaryBtnStyled } from './styles.js'
import { Text, StyleSheet } from 'react-native'

export default function SecondaryBtn({ placeholder }) {

    return (
        <SecondaryBtnStyled>
            <Text style={styles.PlaceholderStyle}>{placeholder}</Text>
        </SecondaryBtnStyled>
    )
}

const styles = StyleSheet.create({
    PlaceholderStyle: {
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 24,
        color: '#09090B',
    }
})