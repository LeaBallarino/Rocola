import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//COMPONENTES
import Header from "./components/header/Header"
import ItemListContainer from './components/items/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer nombre="Leandro"/> 
    </div>
  );
}

export default App;
