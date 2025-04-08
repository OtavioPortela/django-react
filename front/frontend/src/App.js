import React, { useEffect, useState } from 'react';
import ProdutoList from './ProdutoList';
import ProdutoForm from './ProdutoForm';

function App() {
  const [produtos, setProdutos] = useState([]);

  const buscarProdutos = () => {
    fetch('http://127.0.0.1:8000/api/produtos/')
      .then((response) => response.json())
      .then((data) => {
        console.log('Dados recebidos:', data); // Log da resposta
        setProdutos(data);
      })
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  };

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <div className="App">
      <h1>Maratona Django + React</h1>
      <ProdutoForm onProdutoAdicionado={buscarProdutos} />
      <ProdutoList produtos={produtos} />
    </div>
  );
}

export default App;
