import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        textAlign: 'center',
        borderWidth: 1,
        color: '#d4f1f4',
        backgroundColor: '#189ab4',
        borderColor: '#05445e',
    }
})

export default styles;