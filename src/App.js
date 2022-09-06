import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos.css'
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>  
      <main>
        <ItemListConteiner greeting="PRODUCTOS" />
        <ItemCount stock={8} initial={1} onAdd={0} />
      </main>
    </>
  );
}

export default App;
