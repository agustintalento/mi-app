import React from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    
    <CartProvider>
      <header>
        <NavBar />
      </header>  
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'PRODUCTOS'} />} />
          <Route path='/category/:tipo' element={<ItemListContainer />} />  
          <Route path='/item/:id' element={<ItemDetailContainer />} />   
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />        
        </Routes>
          
      </main>
    </CartProvider>
  );
}

export default App;
