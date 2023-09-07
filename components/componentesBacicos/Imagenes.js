import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
} from 'react-native';
export default function Imagenes() {


    return (

        <View >
            <Text style={estilos.texto1}>
                ACA VAN LAS IMAGENES
            </Text>

            <Image
                style={estilos.Image1}
                source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/bugatti-divo-lady-bug-2020-1600-05-1614854784.jpg', }} />
                <Text style={estilos.texto2}>
                esta Image es de internet ↑
            </Text>
            <Image 
            style={estilos.Image2}
            source={require('./../../src/img/46e1cb62a6603a79a4b79eb3b29ebb6e.jpg')}/>
             <Text style={estilos.texto2}>
                este imagende interna ↑
            </Text>
        </View>


    )
}
const estilos = StyleSheet.create({
    texto1: {
 
        fontSize: 20,
        paddingHorizontal: 10,
        textAlign: 'center'
        

        
    },texto2: {
   
        fontSize: 18,
        paddingHorizontal:10,
        textAlign: 'center'
        
    }, Image1: {
        justifyContent:'center',
        alignItems: 'center',
        width: 300,
        height: 200,
    },
    Image2: {
        width: 300,
        height: 300,
        alignItems: 'center',
        alignContent: 'center'
    }



})
