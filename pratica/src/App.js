import React,{useState} from 'react';
import './App.css';


const carros = [
  { categoria: "Esporte", preco: "110000", modelo: "Golf GTI" },
  { categoria: "Esporte", preco: "120000", modelo: "Camaro" },
  { categoria: "SUV", preco: "85000", modelo: "HRV" },
  { categoria: "SUV", preco: "80000", modelo: "T-Cross" },
  { categoria: "Utilitario", preco: "125000", modelo: "Hillux" },
  { categoria: "Utilitario", preco: "90000", modelo: "Ranger" },
]

const TabelaCarros = (cat) =>{

}

function App() {
  const [categoria, setCategoria] = useState('')

  return (
    <>
      {TabelaCarros(categoria)}
    </>
  );
}

export default App;
