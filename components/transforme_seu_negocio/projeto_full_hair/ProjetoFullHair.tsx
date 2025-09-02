// FullHairPresentation.jsx
import "@/components/transforme_seu_negocio/projeto_full_hair/ProjetoFullHair.css";
import { FaMobileAlt, FaClipboardList, FaMoneyBillAlt, FaBolt, FaShieldAlt } from "react-icons/fa";

const images = [
  { src: "/assets/images/login.jpg", alt: "login" },
  { src: "/assets/images/home_page.jpg", alt: "homepage fullhair" },
  { src: "/assets/images/home_page_pesquisar.jpg", alt: "chamar fullhair" },
  { src: "/assets/images/PAGE_CONFIRMAR_SERVICO_premiu.jpg", alt: "selecionar serviço" },
  { src: "/assets/images/SPLASH_ESPERANDO_ACEITARthree.jpg", alt: "solicitando fullhair" },
  { src: "/assets/images/SPLASH_ESPERANDO_ACEITAR.jpg", alt: "aguardando aceite" },
  { src: "/assets/images/SPLASH_espere_no_local.jpg", alt: "aceitou indo ate voce" },
  { src: "/assets/images/PAGE_CONFIRMAR_LOCAL.jpg", alt: "confirmardo solicitação" },

];

export default function ProjetoFullHair() {
  return (
    <section className="fullhair-section">
      <div className="container">
        <h1 className="main-title">Full Hair - Barbearia Delivery Premium</h1>
        <p className="subtitle">
          O app que conecta clientes a barbeiros profissionais, onde e quando quiser.
        </p>

        <div className="content-grid">
          <div className="text-block">
            <h2>Para Clientes</h2>
            <p>
              Solicite um barbeiro de confiança para ir até sua casa, trabalho ou onde estiver.
              Agende seu corte, escolha o estilo e relaxe enquanto cuidamos do seu visual.
            </p>
          </div>

          <div className="image-block">
            <img src={images[0].src}
              alt="Cliente recebendo corte em casa"
              loading="lazy"
              className="miniatura" />
          </div>
        </div>

        <div className="content-grid reverse">
          <div className="image-block">
            <img src={images[1].src}
              alt="Barbeiro profissional trabalhando"
              loading="lazy"
              className="miniatura" />
          </div>
          <div className="text-block">
            <h2>Para Barbeiros</h2>
            <p>
              Cadastre seus serviços, preços e crie um portfólio com fotos dos seus melhores cortes.
              Ganhe mais clientes e seja parte da rede Full Hair, com agendamentos fáceis e pagamentos seguros.
            </p>
          </div>
        </div>

        <div className="featuresOne">
          <h3>Funcionalidades principais</h3>
          <ul>
            <li><FaMobileAlt className="icon" /> Solicitação rápida de barbeiros cadastrados a domicílio</li>
            <li><FaClipboardList className="icon" /> Perfil completo do barbeiro com portfólio e avaliações</li>
            <li><FaMoneyBillAlt className="icon" /> Gestão fácil de serviços, preços e agenda para barbeiros</li>
            <li><FaBolt className="icon" /> Atendimento personalizado e com agilidade</li>
            <li><FaShieldAlt className="icon" /> Pagamento seguro e transparência para todos</li>
          </ul>
        </div>
        
          <div className="gallery">
          {images.map(({ src, alt }, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="download-app">
          <h2>Quer revolucionar seu estilo?</h2>
          <p>Baixe agora o Full Hair e tenha uma barbearia premium na palma da mão.</p>
          <a href="#" className="btn-download" target="_blank" rel="noopener noreferrer">
            Baixar App
          </a>
        </div>
      </div>
    </section>
  );
}
