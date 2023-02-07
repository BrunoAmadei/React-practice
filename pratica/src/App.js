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

const linhas = (cat) => {
    return(

    )
}

const TabelaCarros = (cat) =>{
  return(
    <table border={1} style={{borderCollapse: 'collapse'}}>
      <thead>
        <tr>
          <th>Categoria</th> <th>Preço</th> <th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )
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
