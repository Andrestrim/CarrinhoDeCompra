import ProductSQLite from '../services/sqlite/ProductSQLite'

/*
  { id: 100, name: 'Câmera', valor: 750.00 },
  { id: 101, name: 'Lápis', valor: 3.00 },
  { id: 102, name: 'Borracha', valor: 1.00 },
  { id: 103, name: 'Caneta', valor: 3.00 },
  { id: 104, name: 'Celular', valor: 2500.00 },
  { id: 105, name: 'Macbook', valor: 4000.00 }*/
const listaProdutos=[];

export function getProducts() {
  return listaProdutos;
}

export function getProduct(id) {
  return listaProdutos.find((product) => (product.id == id));
}


const printProd = (prod) => {
  listaProdutos.push({"id":prod.id, "name":prod.name, "valor":prod.valor})
}



ProductSQLite.all()
  .then( 
    prods => prods.forEach( p => printProd(p) )
  )

  //Aqui que eu vou receber e popular o aray com a lista do SQLite//
/*
ProductSQLite.create( {name: 'Câmera', valor: 750.00} )
  .then( id => console.log('Product created with id: '+ id) )
  .catch( err => console.log(err) )
ProductSQLite.create( {name: 'Celular', valor: 2500.00} )
  .then( id => console.log('Product created with id: '+ id) )
  .catch( err => console.log(err) )
ProductSQLite.create( {name: 'Macbook', valor: 4000.00} )
  .then( id => console.log('Product created with id: '+ id) )
  .catch( err => console.log(err) )
  */