import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    imagemView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    imagem: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
    },
    input: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        width: '48%',
        padding: 15,
        backgroundColor: '#0782F9',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: '#fff',
        borderColor: '#0782F9',
        borderWidth: 1,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonOutlineText: {
        color: '#0782F9',
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,  // Para Android
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
});

export default estilo;
