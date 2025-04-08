import React from 'react';

const ProdutoList = ({ produtos }) => {
  if (!Array.isArray(produtos) || produtos.length === 0) {
    return <p>Nenhum produto disponível.</p>;
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProdutoList;
