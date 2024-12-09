import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Cor de fundo suave
        paddingHorizontal: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 16,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9', // Cor chamativa para o botão
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30, // Bordas arredondadas
        width: '80%', // Largura do botão
        alignItems: 'center',
        shadowColor: '#0782F9', // Adicionando sombra para destacar o botão
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5, // Sombra para Android
    },
    buttonText: {
        color: '#fff', // Texto branco no botão
        fontSize: 18,
        fontWeight: '600',
    },
    buttonOutline: {
        backgroundColor: '#fff',
        borderColor: '#0782F9',
        borderWidth: 1,
        marginTop: 10,
    },
    buttonOutlineText: {
        color: '#0782F9', // Texto azul para o botão "Registrar"
    },
});

export default estilo;
