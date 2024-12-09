import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import { auth, firestore, storage } from '../firebase';
import { KeyboardAvoidingView, StyleSheet, View, Alert, Text, TextInput, TouchableOpacity, Pressable, Image, FlatList, ActivityIndicator } from "react-native";
import estilo from "../estilo5";
import { Roupa } from "../model/Roupa";
import * as ImagePicker from "expo-image-picker";
import { uploadBytes } from "firebase/storage";

const RoupaManter = () => {
    const [formRoupa, setFormRoupa]=
    useState<Partial<Roupa>>({})
    const [loading, setLoading] = useState(true);
    const [roupa, setRoupa] = useState<Roupa[]>([]); // Array em branco

    const [imagePath, setImagePath] = useState('https://cdn-icons-png.flaticon.com/512/3318/3318274.png');

    const refRoupa = firestore.collection("Usuario")
        .doc(auth.currentUser?.uid)
        .collection("Roupa")

    const Salvar = () => {
        const refIdRoupa = refRoupa.doc();
        const roupa = new Roupa(formRoupa);
        roupa.id = refIdRoupa.id;        

        refIdRoupa.set(roupa.toFirestore())
        .then(() => {
            alert("Roupa adicionado!");
            Limpar();
        })
        .catch( error => alert(error.message))
    }

    const Limpar = () => {
        setFormRoupa({});
        setImagePath('https://cdn-icons-png.flaticon.com/512/3318/3318274.png');
    }

    // FUNÇÕES FOTO
    const selecionaFoto = () => {
        Alert.alert(
            "Selecionar Foto",
            "Escolha uma alternativa:",
            [
                {
                    text: "Câmera",
                    onPress: () => abrirCamera()
                },
                {
                    text: "Abrir Galeria",
                    onPress: () => abrirGaleria()
                }
            ]
        );
    }

    const abrirCamera = async () => {
        const permissao = await ImagePicker.requestCameraPermissionsAsync();
        if (permissao.granted === false){
            alert("Você recusou o acesso à câmera");
            return;
        }
        const foto = await ImagePicker.launchCameraAsync();
        enviaFoto(foto);
    }

    const abrirGaleria = async() => {
        const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissao.granted === false){
            alert("Você recusou o acesso à câmera");
            return;
        }
        const foto = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1
        });
        enviaFoto(foto);
    }

    const enviaFoto = async (foto) => {
        setImagePath(foto.assets[0].uri);
        const filename = foto.assets[0].fileName;
        const ref = storage.ref(`imagens/${filename}`);

        const img = await fetch(foto.assets[0].uri);
        const bytes = await img.blob();
        const fbResult = await uploadBytes(ref, bytes);

        const urlDownload = await storage.ref(
            fbResult.metadata.fullPath
        ).getDownloadURL();

        setFormRoupa({... formRoupa, urlfoto: urlDownload});        
    }

    //FLATLIST
    useEffect(() => {
        if (loading){
            const subscriber = refRoupa
            .onSnapshot((querySnapshot) => {
                const roupa = [];
                querySnapshot.forEach((documentSnapshot) => {
                    roupa.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id
                    });
                });
                setRoupa(roupa);
                setLoading(false);
            });
            return () => subscriber();
        }
    }, [roupa]);

    if (loading){
        return <ActivityIndicator 
                    size="60" 
                    color="#0782F9"
                    style={estilo.tela}
                />
    }


    const renderItem = ({ item }) => <Item item={item} />
    const Item = ({ item }) => (
        <TouchableOpacity 
            style={estilo.item}
            onPress={ () => alert("Editar") }
            onLongPress={ () => excluir(item) }
        >
            <Text style={estilo.titulo}>Tipo: {item.tipo}</Text>
            <Text style={estilo.titulo}>Raça: {item.cor}</Text>
            <Text style={estilo.titulo}>Estacao: {item.estacao}</Text>
            <Text style={estilo.titulo}>Nasc: {item.tamanho}</Text>
            <Image source={{ uri: item.urlfoto }} style={estilo.imagem}/>
        </TouchableOpacity>
    )

    // EXCLUI E EDITAR
    const excluir = async(item) => {
        Alert.alert(
            "Excluir " + item.tipo + "?",
            "Roupa não poderá ser recuperado!",
            [
                {
                    text: "Cancelar"
                },
                {
                    text: "Excluir",
                    onPress: async () => {
                        const resultado = await refRoupa
                            .doc(item.id)
                            .delete()
                            .then( () => {
                                alert("Roupa excluído!");
                                setLoading(true);
                            })
                    }
                }
            ]

        )
    }

    const editar = () => {
        //PARAMOS AQUI
    }


    return (
        <KeyboardAvoidingView style={estilo.container}>
            <View style={estilo.inputContainer}>
                <Pressable onPress={ () => selecionaFoto() }>
                    <View style={estilo.imagemView}>
                        <Image source={{ uri: imagePath }} style={estilo.imagem}/>
                    </View>
                </Pressable>


                <TextInput 
                    placeholder="Tipo" 
                    value={formRoupa.tipo}
                    onChangeText={texto => setFormRoupa({
                        ...formRoupa,
                        tipo: texto
                    }) }
                    style={estilo.input} 
                />
                <TextInput 
                    placeholder="Cor" 
                    value={formRoupa.cor}
                    onChangeText={texto => setFormRoupa({
                        ...formRoupa,
                        cor: texto
                    }) }
                    style={estilo.input} 
                />
                <TextInput 
                    placeholder="Tecido" 
                    value={formRoupa.tecido}
                    onChangeText={texto => setFormRoupa({
                        ...formRoupa,
                        tecido: texto
                    }) }
                    style={estilo.input} 
                />
                <TextInput 
                    placeholder="Tecido" 
                    value={formRoupa.estacao}
                    onChangeText={texto => setFormRoupa({
                        ...formRoupa,
                        estacao: texto
                    }) }
                    style={estilo.input} 
                />
                <TextInput 
                    placeholder="Data Nascimento" 
                    value={formRoupa.tamanho}
                    onChangeText={texto => setFormRoupa({
                        ...formRoupa,
                        tamanho: texto
                    }) }
                    style={estilo.input} 
                />
            </View> 
            <View style={estilo.buttonContainer}>
                <TouchableOpacity 
                    style={[estilo.button, estilo.buttonOutline]}
                    onPress={Limpar}
                >
                    <Text style={[estilo.buttonText, estilo.buttonOutlineText]}>Limpar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[estilo.button]}
                    onPress={Salvar}
                >
                    <Text style={[estilo.buttonText]}>Salvar</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={roupa}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </KeyboardAvoidingView>
    );
}

export default RoupaManter;