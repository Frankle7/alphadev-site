import './Footer.css'; // Caminho do CSS 


const Footer = () => {
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
        <p className="footer__credits">
          Feito com dedicação por Isfrankle Silva - FKSoDEV
        </p>
      </div>
    </footer>
  );
};

export default Footer;