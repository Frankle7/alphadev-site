import "@/components/transforme_seu_negocio/projeto_ponto_ka/ProjetoPontoKa.css";

const images = [
  { src: "/assets/images/pontone.jpg", alt: "Hambúrguer local" },
  { src: "/assets/images/pontTwo.jpg", alt: "Hambúrguer local" },
  { src: "/assets/images/pontTree.jpg", alt: "Hambúrguer local" },
  { src: "/assets/images/pontFour.jpg", alt: "Hambúrguer local" },
  { src: "/assets/images/pontfive.jpg", alt: "Hambúrguer local" },
  { src: "/assets/images/pontSix.jpg", alt: "Hambúrguer local" },
  { src: "/assets/images/pontSeven.jpg", alt: "Hambúrguer local" },
  { src: "/assets/images/pontEigtgh.jpg", alt: "Hambúrguer local" },
];

export default function ProjetoPontoKa() {
  return (
    <section className="projeto-ponto-ka">
      <div className="container">
        <div className="intro">
          <div className="left-content">
             <ul className="features">
              <li>📱 Interface intuitiva e responsiva</li>
              <li>🛒 Pedido personalizado em poucos cliques</li>
              <li>💳 Pagamento seguro e rápido</li>
              <li>⭐ Avaliação pós-venda integrada</li>
              <li>⚡ Performance otimizada e leve</li>
            </ul>
          </div>
           
          <div className="right-content">
            <h2 className="title">
              🍔 Projeto Ponto Ka: A experiência de pedir hambúrguer, agora 100% digital e profissional
            </h2>
            <p className="description">
              Desenvolvemos um app Android completo para uma hamburgueria local que desejava levar sua operação para outro nível — moderna, digital e conectada ao seu público.
              Com ele, os clientes podem visualizar o cardápio, fazer pedidos, pagar com segurança e avaliar o atendimento, tudo com uma interface profissional, responsiva e com foco na experiência do usuário.
              E o melhor: podemos criar um app assim para o seu negócio também.
            </p>
            <p className="description">
              Cuide da sua marca. Cuide da sua identidade visual.
            </p>
            <p className="description">
              📲 A maior avenida do mundo hoje é a internet. Esteja nela com presença e propósito.
            </p>
          </div>
        </div>

        <div className="gallery">
          {images.map(({ src, alt }, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={alt} loading="lazy" />
            </div>
          ))}
        </div>

        <p className="conclusion">
          Com o <strong>Ponto Ka</strong>, a hamburgueria se digitalizou com um app rápido, bonito e funcional — aproximando clientes e gerando mais vendas com tecnologia.
        </p>

        <div className="download-app">
          <h3>📥 Baixe o app</h3>
          <p>Experimente o Ponto Ka agora mesmo e peça seu hambúrguer com poucos toques.</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="btn-download">
            Baixar App
          </a>
        </div>
      </div>
    </section>
  );
}
