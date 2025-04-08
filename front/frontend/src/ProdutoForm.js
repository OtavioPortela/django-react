import React, { useState } from 'react';

const ProdutoForm = ({ onProdutoAdicionado }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/api/produtos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, descricao, preco }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Produto adicionado:', data);
        setNome('');
        setDescricao('');
        setPreco('');
        onProdutoAdicionado(); // Chama a função para atualizar a lista
      })
      .catch((error) => console.error('Erro ao adicionar produto:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
      </div>
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProdutoForm;
