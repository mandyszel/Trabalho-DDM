import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./HomeScreen";
import RoupaManter from "./RoupaManter";
import RoupaListar from "./RoupaListar";

const Drawer = createDrawerNavigator();

export default function Menu () {
    return(
        <Drawer.Navigator initialRouteName="Página Inicial">
            <Drawer.Screen name="Página Inicial" component={Home}/>




            <Drawer.Screen name="Roupa Manter" component={RoupaManter}/>
            <Drawer.Screen name="Roupa Listar" component={RoupaListar}/>
        </Drawer.Navigator>
    )
}