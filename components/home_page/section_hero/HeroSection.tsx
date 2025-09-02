import React from "react";
import './HeroSection.css';

const SectionHero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>
          Transforme sua carreira com o método Alpha Jr, e dê o primeiro passo
          rumo à sua carreira em tecnologia
        </h1>
        <p>
          Em uma sessão exclusiva, vamos identificar seu nível atual e traçar
          um plano prático para você evoluir como desenvolvedor, mesmo
          começando do zero.
          Você vai entender como aplicar Git, branches, pull requests e
          entregar projetos prontos para o mercado – exatamente como acontece
          nas empresas.
          Essa mentoria é ideal para quem quer sair do básico e finalmente
          começar a atuar como dev de verdade, com apoio de quem já trilhou esse
          caminho.
          <br />
          <br />
          🔹 Vagas limitadas para quem quer aprender com método, prática e
          visão de mercado.
        </p>

        <a href="/formes" className="btn-primary">
          Quero participar da seleção
        </a>
      </div>
    </section>
  );
}
export default SectionHero;

