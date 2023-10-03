import { TextInput, StyleSheet } from "react-native";

export default function InputComponent({placeholder}) {
    return (
        <TextInput style={styles.InputStyled} placeholder={placeholder} />
    )
}

const styles = StyleSheet.create({
    InputStyled: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        borderWidth: 1,
        width: "100%",
        borderColor: '#F4F4F5',
        backgroundColor: '#FFF',
    }
})