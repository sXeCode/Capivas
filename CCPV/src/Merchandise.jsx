import React from 'react';
import './Merchandise.css';

const Merchandise = () => (
  <section className="Merchandise">
    <h2>Merchandise</h2>
    <p>Confira nossos produtos exclusivos e suporte o coletivo Capivandalos!</p>
    <div className="Merchandise-items">
      <div className="Merchandise-item">
        <img src="url-do-produto-1.jpg" alt="Produto 1" />
        <p>Camiseta Capivandalos</p>
      </div>
      <div className="Merchandise-item">
        <img src="url-do-produto-2.jpg" alt="Produto 2" />
        <p>Boné Capivandalos</p>
      </div>
      <div className="Merchandise-item">
        <img src="url-do-produto-3.jpg" alt="Produto 3" />
        <p>Adesivo Capivandalos</p>
      </div>
    </div>
  </section>
);

export default Merchandise;
