import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "CEO Alpha Jr",
    company: "Alpha Jr · São Paulo",
    period: "Jan 2025 - Present",
    logo: "./assets/images/ceo.png",
    linkedin: "https://www.linkedin.com/company/bancopan/",
    description:
      "Conteúdos voltados para iniciantes em programação, normalmente alunos que já me conhecem pessoalmente ou por redes sociais. A mentoria ensina do zero até o aluno fazer o primeiro deploy do seu site, acessível na web.",
  },
  {
    title: "Software Engineer Jr",
    company: "Banco Pan · São Paulo",
    period: "Nov 2022 - Set 2024",
    logo: "./assets/images/logo-pan.png",
    linkedin: "https://www.linkedin.com/company/bancopan/",
    description:
      "Dev Flutter/Android no Banco PAN, focado em performance, UX e boas práticas. Além de evoluir Marketplace, Investimentos e Cartões do app com qualidade, tive o privilégio de palestrar para jovens e inspirar novas gerações que me têm como referência no início de suas jornadas na tecnologia."
  },
  {
    title: "Full Stack Developer",
    company: "Instituto Proa · São Paulo",
    period: "Jul 2022 - Dec 2022",
    logo: "./assets/images/logo-proa.png",
    linkedin: "https://www.linkedin.com/school/instituto-proa/",
    description:
      "Projetos reais com HTML, CSS e JS, colaborando em equipe e liderando entregas de iniciativas com impacto social, como Quadra da Quebrada, Som Periférico, NPX Invest, Import, entre outros. Atuei em times ágeis, com rotinas de Scrum, reuniões de alinhamento e apresentações regulares. Também desenvolvi habilidades de comunicação, participando de palestras e aprimorando minha oratória e postura em palco com a orientação da querida Aurora Seles, o que fortaleceu minha confiança e capacidade de apresentar ideias com clareza e impacto."
  },
  {
    title: "Atendente - Barman",
    company: "Kokua · São Paulo",
    period: "Mar 2022 - Set 2022",
    logo: "./assets/images/barman.jpg",
    linkedin: "https://www.linkedin.com/company/loggi/",
    description:
      "Atendimento em bar com preparo de drinks especiais, suporte ao caixa, gestão de reservas e foco em agilidade, criatividade e experiência do cliente.",
  },
  {
    title: "Conferente",
    company: "Mercato Sadia - BRF · São Paulo",
    period: "Dez 2021 - Mar 2022",
    logo: "./assets/images/brf.png",
    linkedin: "https://www.linkedin.com/company/loggi/",
    description:
      "Recebimento, conferência e armazenamento de mercadorias; controle de qualidade, validade e conservação em câmaras frias; organização do estoque e suporte ao fluxo logístico.",
  },
  {
    title: "Operador de Hortifruti",
    company: "Higas Supemercado · São Paulo",
    period: "Set 2020 - Dez 2021",
    logo: "./assets/images/Hortifruti.jpg",
    linkedin: "https://www.linkedin.com/company/loggi/",
    description:
      "Manuseio cuidadoso de alimentos e atendimento direto, mantendo qualidade e ambiente organizado.",
  },
  {
    title: "Motoca na Ifood",
    company: "Ifood · São Paulo",
    period: "Mai 2018 - Jul 2020",
    logo: "./assets/images/ifood.jpg",
    linkedin: "https://www.linkedin.com/company/bancopan/",
    description:
      "Motoboy experiente em entregas ágeis e seguras em São Paulo, com domínio de rotas, agilidade e responsabilidade mesmo diante dos riscos do trânsito.",
  },
  {
    title: "Designer Gráfico",
    company: "Boar Digital Ltda · São Paulo",
    period: "Mar 2018 - Ago 2020",
    logo: "./assets/images/COPIADORA.webp",
    linkedin: "https://www.linkedin.com/company/loggi/",
    description:
      "Criação de artes visuais com foco em impacto e comunicação, usando CorelDRAW e criatividade.",
  },
  {
    title: "Vendedor Autônomo",
    company: "(Crepe Suíço) · Maranhao",
    period: "Jul 2009 - Dez 2014",
    logo: "./assets/images/crepe.jpg",
    linkedin: "https://www.linkedin.com/company/loggi/",
    description:
      "Abordagem direta ao cliente, improviso nas vendas e gestão de pequenos negócios na prática.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience-section" className="experience-section">
      <h2 className="section-heading">Professional Experience</h2>
      <div className="experience-wrapper">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card fade-in-animation">
            <img src={exp.logo} alt={`${exp.title} Logo`} className="company-logo" />
            <div className="experience-details">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <a
                  href={exp.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-button"
                  aria-label="View on LinkedIn"
                >
                  <img src="./assets/images/linkedin-icon.png" alt="LinkedIn" />
                </a>
              </div>
              <h4>
                {exp.company} · {exp.period}
              </h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
