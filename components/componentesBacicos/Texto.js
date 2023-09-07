import React, { useState } from 'react';
import {
   StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Texto() {
    const[Titulo,setTtilo]=useState ('Api de Text');

    const precionar = () => {
        setTtilo('API DE TEXTO PRECIONADO');
    }
    return (
        <View>
            <View style={estilos.contenApi}>
                <Text style={estilos.tituloApi} onPress={precionar}>
                    {Titulo}
                </Text>
                <Text style={estilos.texto} onPress={console.log('le di click')}>
                    elemento que me permite un texto y agradarle estilos
                </Text>
            </View>
        </View>
    )
}
const estilos = StyleSheet.create({
    contenApi: {
      border: 30,
      bordercolor: 'green',
      backgroundColor: 'yellow'
    },
    tituloApi:{
      color: 'blue',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    texto:{
      color: 'black',
      fontSize: 18,
      paddingHorizontal:10
    }
  })
