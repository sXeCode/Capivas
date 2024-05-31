import React from 'react';
import './Eventos.css';

const Eventos = () => (
  <section className="Eventos">
    <h2>Eventos</h2>
    <p>Fique por dentro dos próximos eventos organizados pelo Capivandalos.</p>
    <ul className="Eventos-list">
      <li className="Evento-item">
        <h3>Festival Punk</h3>
        <p>Data: 05 de Julho</p>
        <p>Local: Punk Arena</p>
      </li>
      <li className="Evento-item">
        <h3>Show Underground</h3>
        <p>Data: 15 de Julho</p>
        <p>Local: Rock Bar</p>
      </li>
      <li className="Evento-item">
        <h3>Encontro Anual</h3>
        <p>Data: 25 de Julho</p>
        <p>Local: The Hardcore Club</p>
      </li>
    </ul>
  </section>
);

export default Eventos;
