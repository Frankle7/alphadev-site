import React from 'react';
import './FooterStore.css';

const FooterStore: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a
            href="https://www.instagram.com/fk_s.o.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Isfrankle"
          >
            <img
              src="/assets/logos/instagram_icon.png"
              alt="Instagram"
              className="footer__icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/isfrankle-souza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Isfrankle"
          >
            <img
              src="/assets/logos/linkedin_icon.png"
              alt="LinkedIn"
              className="footer__icon"
            />
          </a>
          <a
            href="https://www.instagram.com/fashioncodek/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram FashioncodeK"
          >
            <img
              src="/assets/images/logofk.png"
              alt="FashioncodeK"
              className="footer__icon"
            />
          </a>
        </div>

        <p className="footer__copyright">
          &copy; 2025 Isfrankle. Todos os direitos reservados.
        </p>

        <p className="footer__message">
          Todos os produtos são pensados para conectar estilo, código e atitude.
          <br />
          Você está comprando direto de quem vive e respira programação.
        </p>

        <a href="https://wa.me/5511945139834" className="btn whatsapp">
          Fale conosco no WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default FooterStore;
