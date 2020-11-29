import React, { useState } from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1 },
  { id: 2, name: 'produit 2', price: 75, quantity: 2 },
  { id: 3, name: 'produit 3', price: 20, quantity: 5 },
];

/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: initialProductList,
    };
  } */

function App() {
  const [products, setProducts] = useState(initialProductList);
  const [totalPrice, setTotalPrice] = useReducer();

  const newQuantity = (listId, newQty) => {
    setProducts(
      products.map((product) => {
        console.log('listId' + listId, 'product.id' + product.id);
        return listId === product.id
          ? { ...product, quantity: newQty }
          : product;
      })
    );
  };

  return (
    <div className='App'>
      <h1>Ma commande</h1>

      <table>
        <thead>
          <tr>
            <th>produit</th>
            <th>prix unitaire</th>
            <th>quantité</th>
            <th>prix total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((list) => (
            <tr key={list.id}>
              <td>{list.name}</td>
              <td>{list.price}</td>
              <td>
                <input
                  value={list.quantity}
                  type='number'
                  onChange={(event) => newQuantity(list.id, event.target.value)}
                />
              </td>
              <td>{list.quantity * list.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Montant de la commande: {}</p>
    </div>
  );
}

export default App;
