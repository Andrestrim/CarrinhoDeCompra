import React from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

/*=============== COMPONENT ====================*/
export function Product({name, valor, onPress}) {
    return (
      <TouchableOpacity  style={styles.card} onPress={onPress}>

          <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Image
              style={styles.tinyLogo}
              source={require('../../../assets/Caixas_capa.png')}
            />
            <Text style={styles.price}>R$: {valor}</Text>
          </View>
      </TouchableOpacity>  
        
    );
}

/*=============== ESTILOS VISUAIS ====================*/
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'gray',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginHorizontal: 20,
  },
  infoContainer: {
    padding: 16,
    height:'auto',
    width:130,
    alignItems:"center"
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    marginTop:3,
    marginBottom: 8,
  },
  tinyLogo: {
    width: 65,
    height: 56,
    resizeMode: 'contain'
  }
});