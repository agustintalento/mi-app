import React from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import CategoryListContainer from './components/CategoryListContainer';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>  
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'PRODUCTOS'} />} />
          <Route path='/category/:tipo' element={<CategoryListContainer />} />  
          <Route path='/item/:id' element={<ItemDetailContainer />} />            
        </Routes>
          
      </main>


    </>
  );
}

export default App;
