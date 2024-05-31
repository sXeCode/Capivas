import React from 'react';

const openWhatsApp = () => {
  const phoneNumber = '+5517997897413';
  const message = 'Olá Capivandalos! Gostaria de mais informações sobre o merchandise.';
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

const Contact = () => (
  <section className="Contact">
    <h2>Contato</h2>
    <p>Fale conosco para mais informações ou dúvidas.</p>
    <button className="Contact-button" onClick={openWhatsApp}>Fale Conosco no WhatsApp</button>
  </section>
);

export default Contact;
