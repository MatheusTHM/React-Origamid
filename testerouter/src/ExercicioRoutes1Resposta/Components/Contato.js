import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';
const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato." />
      <img src={foto} alt="notebook" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>thommesani@gmail.com</li>
          <li>7070-7070</li>
          <li>Alguma rua, dale dele.</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
