import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//COMPONENTES
import Header from "./components/header/Header"
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailConteiner from './components/items/ItemDetailConteiner';


function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer nombre="Leandro"/>
      <ItemDetailConteiner/>
    </div>
  );
}

export default App;
