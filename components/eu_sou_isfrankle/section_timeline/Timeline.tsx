'use client';
import './Timeline.css';
import { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

const timelineData = [
  {
    year: "PROA",
    image: "/assets/images/proa.jpg",
    alt: "PROA",
    text:
      "Após três semestres consecutivos de tentativas, finalmente consegui conquistar uma bolsa de estudo 100% gratuita no PROA. Esse momento me ensinou sobre a importância da persistência e do foco. A experiência no PROA foi um divisor de águas na minha formação, me permitindo não só crescer tecnicamente, mas também fortalecer minhas habilidades interpessoais e minha visão de futuro."
  },
  {
    year: "ORACLE",
    image: "/assets/images/oracle.jpg",
    alt: "ORACLE",
    text:
      "Ter tido a oportunidade de conhecer e fazer networking com profissionais da Oracle foi importante na minha jornada — enxerguei de perto como a tecnologia de ponta é construída e me inspirei a mirar ainda mais alto."
  },
  {
    year: "BANCO PAN",
    image: "/assets/images/1663888186407.jpg",
    alt: "BANCO PAN",
    text:
      "Minha visita ao Banco Pan foi um marco na minha trajetória profissional. Além de ampliar meu networking com profissionais incríveis, essa experiência me proporcionou a oportunidade de ser contratado, abrindo portas para novos desafios e aprendizados na área de tecnologia."
  },
  {
    year: "FAAP",
    image: "/assets/images/1664334295684.jpg",
    alt: "FAAP",
    text:
      "Na oficina de 'Relações Públicas' da FAAP, consegui juntamente com meu grupo desenvolver rapidamente o conceito do SONIN, uma goma calmante para insônia, com identidade visual e foco em saúde mental. A experiência, aliada ao networking proporcionado pelo Instituto PROA, foi inspiradora e me motivou a continuar buscando soluções criativas em projetos reais."
  },
  {
    year: "HEINEKEN",
    image: "/assets/images/1666738402437.jpg",
    alt: "HEINEKEN",
    text:
      "Durante minha participação no projeto WeLab, promovido pela The HEINEKEN Company em parceria com o Instituto PROA, tive a chance de me expressar com desenvoltura, fortalecer minha rede de contatos e aprender com pessoas incríveis. Foi um daqueles momentos que me lembram o quanto crescer profissionalmente também passa por boas conexões e trocas genuínas."
  },
  {
    year: "ORACLE ONE",
    image: "/assets/images/one-acate-800x533.jpg",
    alt: "ORACLE ONE",
    text:
      "Participar do Oracle One foi incrível. Comecei com HTML, CSS e JS e logo evoluí para o backend. A plataforma combina teoria e prática de forma eficiente, e a troca com outros alunos e mentores foi essencial para meu crescimento. Hoje, me sinto muito mais preparado para seguir na programação."
  },
  {
    year: "PALESTRA PREFEITURA",
    image: "/assets/images/fc.jpg",
    alt: "PALESTRA PREFEITURA",
    text:
      "Participei da 1ª Feira das Profissões de Franco da Rocha, onde, junto com meus colegas, compartilhei experiências e inspirei jovens a ingressarem na tecnologia. Agradeço ao Instituto PROA pela oportunidade de impactar vidas e reforçar a importância de um bom currículo."
  },
  {
    year: "BSIDES SP",
    image: "/assets/images/1716254183740.jpg",
    alt: "BSIDES SP",
    text:
      "Participei da 19ª edição da BSides São Paulo e foi uma experiência incrível! Fiz muitas conexões valiosas e aprendi bastante com palestras sobre segurança, vulnerabilidades e mobile security. Agradeço especialmente ao Lucas Carmo (Luriel) e à Gabi Vawdrey pelos insights e apoio. Definitivamente, um evento que me marcou e ampliou meus horizontes na área de tecnologia!"
  },
  {
    year: "GOOGLE",
    image: "/assets/images/1718747111273.jpg",
    alt: "GOOGLE",
    text:
      "Participei de um evento incrível do Google, onde troquei valiosos insights com Marina Coelho sobre carreira e com Rosário Pereira Fernandes sobre sua trajetória. Agradeço também à Tainara Almeida Santos pelas conexões incríveis. Foi uma experiência enriquecedora!"
  },
  {
    year: "PALESTRA PAN",
    image: "/assets/images/palestra.jpg",
    alt: "PALESTRA PAN",
    text:
      "Participei de uma palestra sobre CARREIRA com os Proanes no Banco PAN. Foi uma experiência incrível poder compartilhar meu aprendizado com quem está começando. Agradeço à Geovanna Ramalho, Mariana Fonseca e ao Instituto PROA pela oportunidade de fazer parte desse momento."
  },
  {
    year: "MEU LIVRO",
    image: "/assets/images/1725452288802.jpg",
    alt: "MEU LIVRO",
    text:
      "Fui convidado a participar do livro Realizados, de Carolina Costa Cavalcanti e Ana Carolina Shinoda, onde compartilhei minha história de superação. Agradeço por essa oportunidade de inspirar e ajudar outros a encontrarem seu propósito."
  }
];



export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 768) setItemsPerView(1);
      else if (width < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const visibleItemsCount = () => itemsPerView;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerView < 0 ? 0 : prev - itemsPerView
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= timelineData.length
        ? prev
        : prev + itemsPerView
    );
  };

  return (
    <section className="timeline-section">
      <h1 className="timeline-title">Feitos Importantes</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="timeline-items-container">
          <div className="timeline-items">
            {timelineData
              .slice(currentIndex, currentIndex + visibleItemsCount())
              .map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={800}
                      height={533}
                      className="timeline-image"
                      unoptimized
                    />
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="timeline-controls">
          <button onClick={handlePrev} className="timeline-btn">⬅️</button>
          <button onClick={handleNext} className="timeline-btn">➡️</button>
        </div>
      </div>
    </section>
  );
}