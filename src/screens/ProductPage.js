import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Button} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import { Product } from '../components/ProdutoDisplay/Product';
import { getProducts,getProduct } from '../data/Products';
import { CartContext } from '../../CartContext';

export default function Home({ navigation }) {

  //function que transita entre telas -> home to shopcart <-
  function goToCart(){
    navigation.navigate('ShopCart')
  }
  //END OF TRANSITION//
  //RENDERIZA OS ITENS NA TELA//
  function renderProduct({item: product}) {
    return (
      <Product {...product} onPress={()=>addItemToCart(product.id)}/>
    );
  }
  //END OF RENDER//
  //LISTA DE PRODUTOS//
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getProducts());
  });
  //END OF LISTA DE PRODUTOS//
  //PEGA A CONTAGEM DE ITENS NO CARRINHO//
  const {getItemsCount} = useContext(CartContext);
  //END OF CONTAGEM//
  //ADD PRODUTO AO CART//
  const { addItemToCart } = useContext(CartContext);
  //END ADD PROD TO CART//

  return (
    <SafeAreaView style={styles.supreme}>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      
      <View style={styles.headder}>
        <Ionicons 
          name="home-sharp" 
          size={30}
          color='#4C4E52'
        />
        <Image 
         style={styles.logoImage}
         source={require('../../assets/logo.png')}/>
        <TouchableOpacity onPress={goToCart}>
          <View style={{flexDirection:'row'}} >
            <Ionicons name="cart-sharp" size={30}/>
            <Text >({getItemsCount()})</Text>
          </View>
          
        </TouchableOpacity>
      </View>

      
      <View style={styles.body}>
        
        <View style={styles.bodyElements}>
          <FlatList
            horizontal
            keyExtractor={item => item.id.toString()}
            data={products}
            renderItem={renderProduct}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  supreme: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headder:{
    backgroundColor:'#8C5741',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  body:{
    marginLeft:10
  },
  bodyElements:{
    marginTop:25
  },
  logoImage:{
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain'
  }
  
});