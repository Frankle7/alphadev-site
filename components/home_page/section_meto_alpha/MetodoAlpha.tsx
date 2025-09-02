import React from "react";
import './MetodoAlpha.css'; // Caminho do CSS 

export default function MetodoAlpha() {
  return (
    <section id="o-que-voce-ganha" className="metodo-alpha">
      <div className="container">
        <h1 className="titulo">
          O que você ganha com o Método Alpha Jr <br /> do ZER0 ao DEPLOY?
        </h1>

        <div className="conteudo">
          <div className="video">
            <video
              className="video"
              src="/assets/videos/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          <div className="linha-do-tempo">
            <div className="passo">
              <span className="numero">Passo 1</span>
              <h3>Análise da sua realidade atual</h3>
              <p>
                Entendemos seu ponto de partida, desafios e objetivos, criando
                base para evolução prática e real.
              </p>
            </div>

            <div className="passo">
              <span className="numero">Passo 2</span>
              <h3>Um curso completo, mão na massa</h3>
              <p>
                Para quem quer sair do absoluto zero e aprender a construir uma
                landing page do início ao fim, entendendo a lógica de componentes
                reutilizáveis, versionamento com Git e GitHub, e fazer o deploy
                final e deixar seu link no AR, como acontece no mercado de trabalho.
              </p>
            </div>

            <div className="passo">
              <span className="numero">Passo 3</span>
              <h3>Aprenda a criar e publicar seu primeiro site de forma profissional</h3>
              <p>
                Mesmo que você nunca tenha programado antes. Tudo explicado do jeito
                mais simples e direto, com códigos prontos e materiais que você
                realmente entende e aplica na prática.
              </p>
            </div>

            <div className="passo">
              <span className="numero">Passo 4</span>
              <h3>Curso 100% intencional e com propósito real de mercado.</h3>
              <p>
                Você aprende HTML, CSS e JavaScript com foco na criação de uma landing
                page completa. Tudo com componentes reutilizáveis, como os devs fazem
                no dia a dia. Você aprende Git e GitHub com commits, branches, README
                e Pull Requests. Simula problemas reais de um dev (com erros comuns e
                como resolvê-los). Ainda aprenderá tres maneiras gratuitas de fazer deploy e deixar seu site no ar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
