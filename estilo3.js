import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    containerEntrada: {
        width: '100%',
        marginBottom: 20,
    },
    entrada: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    containerBotoes: {
        width: '100%',
        alignItems: 'center',
    },
    botao: {
        width: '100%',
        padding: 15,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    botaoOutline: {
        backgroundColor: '#fff',
        borderColor: '#007BFF',
        borderWidth: 1,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textoBotaoOutline: {
        color: '#007BFF',
    },
});

export default estilo;
