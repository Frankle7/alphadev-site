import React from "react";
import Image from 'next/image';
import '@/components/home_page/section_depoimentos/Depoimentos.css'; // Caminho do CSS 
import pict from '@/public/assets/images/pict.jpg';
import hq720 from '@/public/assets/images/hq720.jpg';
import download from '@/public/assets/images/download.jpg';

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="section-depoimentos container">
      <h2 className="titulo">DEPOIMENTOS</h2>
      <p className="subtitulo">
        Cases reais de Devs que transformaram suas histórias com o Método Alpha Jr
        do ZER0 ao DEPLOY
      </p>

      <div className="cards-depoimentos">
        {/* CARD 1 */}
        <div className="card-dev">
          <Image src={pict} alt="Alanna" width={200} height={200} />

          <div className="conteudo-dev">
            <h3 className="nome-dev">Alanna Tenani</h3>
            <p className="stack-dev">Estagiaria</p>
            <div className="estrelas">⭐⭐⭐⭐⭐</div>
            <p className="descricao-dev">
              "Sou de periferia e sempre achei que tecnologia era só pra quem já
              sabia mexer em computador. Comecei a mentoria sem saber o que era
              HTML, e agora já construí meu primeiro portfólio. Aprendi a acreditar
              em mim."
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card-dev">
          <Image
            src={hq720}
            alt="Gabriel Pendiuk"
            width={200}
            height={200}
          />
          <div className="conteudo-dev">
            <h3 className="nome-dev">Gabriel Pendiuk</h3>
            <p className="stack-dev">Frontend | React</p>
            <div className="estrelas">⭐⭐⭐⭐⭐</div>
            <p className="descricao-dev">
              "Eu trabalhava com vendas e nunca tinha encostado em código. No
              começo achava que não era pra mim, mas a didática simples e direta da
              mentoria me mostrou que qualquer pessoa pode aprender. Hoje estou em
              transição de carreira e já participei do meu primeiro processo
              seletivo."
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card-dev">
          <Image
            src={download}
            alt="Breno Silva"
            width={200}
            height={200}
          />
          <div className="conteudo-dev">
            <h3 className="nome-dev">Breno Silva</h3>
            <p className="stack-dev">Front-end Mobile | Flutter</p>
            <div className="estrelas">⭐⭐⭐⭐⭐</div>
            <p className="descricao-dev">
              "Antes da mentoria, eu mal sabia ligar um computador direito. Comecei
              do absoluto zero, mas com o passo a passo e o suporte da comunidade,
              hoje já consigo montar meus próprias apps é simples mas faço com
              esforço. Nunca imaginei que conseguiria!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
