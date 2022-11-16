import React, {createContext, useState, useEffect, useCallback} from 'react';
import { getProduct } from './src/data/Products';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  
  function addItemToCart(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.valor 
            }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.valor;
            }
            return item;
          });
      }
    });

  }

  
  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }
  
  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  function buyItems(){
    const vazio=[]
    setItems(vazio)
  }

  //FUNCTION DELETAR ITEM DO CARRINHO//
    const removeItem=useCallback((item)=>{
      const find=items.filter(r=>r.id !== item.id);
      setItems(find);
    })
  //END DELETAR ITEM DO CARRINHO//

  //ASYNC COMEÇA AQUI//
    //CARREGANDO O CARRINHO//
  useEffect(()=>{
    async function loadCartState(){
      const cartStorage= await AsyncStorage.getItem('@storage_CART')

      if(cartStorage){
        setItems(JSON.parse(cartStorage))
      }
    }
    loadCartState()
  },[])
    //SALVANDO O CARRINHO//
  useEffect(()=>{
    async function saveCartState(){
      await AsyncStorage.setItem('@storage_CART',JSON.stringify(items))
    }
    saveCartState()
  },[items])
  //ASYNC TERMINA AQUI//

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice, buyItems,removeItem}}>
      {props.children}
    </CartContext.Provider>
  );
}

