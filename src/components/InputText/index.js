import { TextInput, StyleSheet } from "react-native";

export default function InputText({placeholder}) {
    return (
        <TextInput style={styles.InputStyled} placeholder={placeholder} keyboardType="text"/>
    )
}

const styles = StyleSheet.create({
    InputStyled: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F4F4F5',
        backgroundColor: '#FFF',
    }
})