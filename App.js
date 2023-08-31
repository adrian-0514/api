import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




export default function App() {
  return (
    <>
      <View style={estilos.contenApi}>
        <Text style={estilos.tituloApi}>
          Api de Text
          </Text>
          <Text style={estilos.texto}onPress={console.log('le di click')}>
            elemento que me permite un texto y agradarle estilos
          </Text>
      </View>
    </>
  )
};

const estilos = StyleSheet.create({
  contenApi: {
    border: 3,
    bordercolor: 'green',
    backgroundColor: 'yellow'
  },
  tituloApi:{
    color: 'red',
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

