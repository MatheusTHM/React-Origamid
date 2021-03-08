import React from 'react';
import styles from './Produto.module.css';

//Necessário habilitar os estilos no index.html
const Produto = () => {
  return (
    <div className="animeLeft">
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 2000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};

export default Produto;
