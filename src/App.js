import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos.css'
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>  
      <body>
        <ItemListConteiner greeting="HOLA! PROXIMAMENTE LA TIENDA" />
      </body>
    </>
  );
}

export default App;
