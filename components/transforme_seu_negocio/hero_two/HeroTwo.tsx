import Image from "next/image";
import "@/components/transforme_seu_negocio/hero_two/HeroTwo.css";

export default function HeroTwo() {
  return (
    <section className="heroSection">
      <div className="heroContentWrapper">
        <div className="heroTextContainer">
          <h1 className="heroTitle">
            Seu negócio no digital começa aqui.
          </h1>
          <p className="heroSubtitle">
            🚀 Transformamos ideias em aplicativos poderosos
            <br></br>
            Na nossa equipe, desenvolvemos aplicativos Android nativos em Kotlin, multiplataforma com Flutter e híbridos com React Native, combinando design moderno, performance e foco total em conversão. Criamos soluções escaláveis, sob medida, que conectam marcas aos seus clientes de forma rápida, intuitiva e inteligente.
            <br></br>
            <br></br>
            Seu negócio na palma da mão.
            <br></br>
            Sua transformação digital começa aqui.          </p>
          <div className="buttonGroup">
            <a href="/formes#formulario">
              <button className="botaoCTA">
                Solicitar Orçamento
              </button>
            </a>
          </div>
        </div>
        <div className="heroImageContainer">
          <Image
            src="/assets/images/programmer.jpeg"
            alt="Ilustração de desenvolvimento"
            fill
            priority={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
