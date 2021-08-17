import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

function Contato() {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>gabrieldaniel@gec.inatel.br</li>
          <li>(35)9 9750-0430</li>
          <li>R. Leopoldo de Luna Dias, 326</li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;
