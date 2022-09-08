import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>  
      <main>
        <ItemListContainer />        
      </main>
    </>
  );
}

export default App;
