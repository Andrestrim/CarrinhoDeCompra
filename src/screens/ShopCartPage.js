import React, { useEffect, useState, useContext} from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import { CartContext } from '../../CartContext';

//tentar fazer com que o carrinho funcione
export default function ShopCart({ navigation }){
  
  //LISTA DE PRODUTOS//
  const {items, getTotalPrice, removeItem,buyItems} = useContext(CartContext);
  //END OF LISTA DE PRODUTOS//
  //PEGA O VALOR TOTAL DOS PRODUTOS//
  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.bottomBody}>
        <Text style={{marginHorizontal:15}}>Valor total da compra:{total}</Text>
        <Button
          title='Comprar'
          onPress={() => {
            alert(`Compra efetuada`);
            buyItems()
        }}
        />
      </View>
    );
  }
  //END OF VALOR TOTAL//
  //RENDERIZA OS ITENS NA TELA//
  function renderItem({item}) {
    return (
        <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>R$ {item.totalPrice}</Text>
          <TouchableOpacity onPress={()=>removeItem(item)}>
            <Ionicons 
            name="close-outline" 
            size={40}
            color='red'
            />
          </TouchableOpacity>
        </View>
    );
  }
  //END OF RENDER//
  
  
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Produtos no seu carrinho</Text> 
      
      <View style={styles.body}>
        <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        keyExtractor={item => item.product.id.toString()}
        data={ items }
        renderItem={renderItem}
        ListFooterComponent={Totals}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    
    backgroundColor:"#A9a9a9",
    marginLeft:5,
    marginTop:5,
    marginRight:23,
    marginLeft:7,
    height:'auto',
    width:'auto',
  },
  container:{
    
    flex:1,
  },
  text:{
    
    fontSize:25,
    fontWeight:'bold',
  },
  bottomBody:{
    
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    //marginRight: 10
  },
  cartLine: {
     
    flexDirection: 'row',
  },
  lineLeft: {
    
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: {
    
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },

  //DECIDIR DEPOIS SE ESTE ESTILO FICA MELHOR//
  /*
  cartLineTotal: { 
      flexDirection: 'row',
      borderTopColor: '#dddddd',
      borderTopWidth: 1
    },
    lineTotal: {
      fontWeight: 'bold',    
    },
  */
});