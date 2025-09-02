import React from "react";
import './QuemEIsfrankle.css'; // Caminho do CSS 
import Link from 'next/link';


export default function QuemEIsfrankle() {
  return (
    <section id="quem-e-isfrankle" className="sobre-isfrankle">
      <div className="container">
        <h2 className="titulo">Quem é Isfrankle?</h2>
        <p className="descricao">
          Isfrankle Silva é mais do que um desenvolvedor, ele é um exemplo de
          superação, dedicação e transformação. Originário do Maranhão e morador
          da periferia de São Paulo, sua jornada na tecnologia é uma verdadeira
          inspiração. Hoje, ele é um profissional reconhecido no mercado, com
          habilidades no desenvolvimento Front-End, Mobile e uma visão inovadora
          para impactar positivamente o mundo.
        </p>
        <div className="valores">
          <div className="valor">
            <h3>Resiliência</h3>
            <p>
              Superou desafios imensos ao migrar para a área de tecnologia,
              demonstrando que é possível reescrever sua história a qualquer momento.
            </p>
          </div>
          <div className="valor">
            <h3>Transformação</h3>
            <p>
              Passou de um vendedor para se tornar um especialista em
              desenvolvimento, sempre buscando aprender e evoluir, sempre
              motivando suas raises.
            </p>
          </div>
          <div className="valor">
            <h3>Impacto Social</h3>
            <p>
              Isfrankle acredita que a tecnologia pode transformar vidas e dedica
              parte de seu tempo para ensinar jovens da periferia, criando
              oportunidades para quem mais precisa.
            </p>
          </div>
        </div>
        <br />
        <br />
        <Link href="/eusouisfrankle" className="btn-primary">
          Conheça a trajetória!
        </Link>
      </div>
    </section>
  );
}
