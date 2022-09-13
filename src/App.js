import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>  
      <main>
        <ItemListContainer greeting={'PRODUCTOS'}/> 
        <ItemDetailContainer />    
      </main>
    </>
  );
}

export default App;
