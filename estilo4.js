import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    item: {
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,  // Para Android
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    imagem: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginTop: 10,
    },
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
});

export default estilo;
