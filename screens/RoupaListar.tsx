import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebase';
import { FlatList, View, TextInput, TouchableOpacity, Text, ActivityIndicator, Image } from "react-native";
import estilo from '../estilo4';
import { Roupa } from '../model/Roupa';
import { SafeAreaView } from "react-native-safe-area-context";

const RoupaListar = () => {
    const [loading, setLoading] = useState(true);
    const [roupa, setRoupa] = useState<Roupa[]>([]); // Array em branco

    const refRoupa = firestore.collection("Usuario")
        .doc(auth.currentUser?.uid)
        .collection("Roupa")

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
        <View style={estilo.item}>
            <Text style={estilo.titulo}>Tipo: {item.tipo}</Text>
            <Text style={estilo.titulo}>Cor: {item.cor}</Text>
            <Text style={estilo.titulo}>Estação: {item.estacao}</Text>
            <Text style={estilo.titulo}>Tamanho: {item.tamanho}</Text>
            <Text style={estilo.titulo}>Tecido: {item.tecido}</Text>

            <Image source={{ uri: item.urlfoto }} style={estilo.imagem}/>
        </View>
    )

    return (
        <View style={estilo.container}>
            <FlatList 
                data={roupa}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )



}
export default RoupaListar;