const listaProdutos=[
  { id: 100, name: 'Câmera', valor: 750.00 },
  { id: 101, name: 'Lápis', valor: 3.00 },
  { id: 102, name: 'Borracha', valor: 1.00 },
  { id: 103, name: 'Caneta', valor: 3.00 },
  { id: 104, name: 'Celular', valor: 2500.00 },
  { id: 105, name: 'Macbook', valor: 4000.00 }
];
export function getProducts() {
  return listaProdutos;
}

export function getProduct(id) {
  return listaProdutos.find((product) => (product.id == id));
}


//Aqui que eu vou receber e popular o aray com a lista do SQLite//