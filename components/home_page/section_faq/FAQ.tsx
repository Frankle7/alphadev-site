'use client';

import React, { useState } from "react";
import '../section_faq/FAQ.css';

export default function FAQ() {
  // Estado para guardar qual item está aberto (índice), ou null se nenhum aberto
  const [openIndex, setOpenIndex] = useState(null);

  // Função para abrir/fechar o item clicado
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // fecha se já estiver aberto
    } else {
      setOpenIndex(index); // abre o item clicado
    }
  };

  // Dados das FAQs (pode deixar num array para facilitar manutenção)
  const faqs = [
    {
      question: "Como irá funcionar o curso gratuito?",
      answer:
        "O curso é 100% online, com conteúdos organizados por aulas. Você terá slides visuais e PDFs detalhados para aprender de forma prática, mesmo que nunca tenha programado."
    },
    {
      question: "Quem pode participar?",
      answer:
        "Qualquer pessoa interessada em aprender programação do zero, principalmente iniciantes e jovens da periferia que desejam uma chance real no mercado tech."
    },
    {
      question: "Qual o objetivo do curso Alpha?",
      answer:
        "Levar o aluno do absoluto zero até a publicação de um projeto real online, ensinando na prática o que acontece no dia a dia de um desenvolvedor."
    },
    {
      question: "Vai ter certificado?",
      answer:
        "Sim, ao final do curso você receberá um certificado simbólico de conclusão e terá seu projeto publicado como portfólio para mostrar em entrevistas."
    },
    {
      question: "Como posso me inscrever?",
      answer:
        "Em breve abriremos a primeira turma. Você pode deixar seu e-mail na página principal para ser avisado assim que as vagas forem liberadas."
    }
  ];

  return (
    <section id="faq" className="faq-wrapper">
      <div className="faq-left">
        <h2>FAQ</h2>
        <br />
        <h3>Perguntas frequentes</h3>
        <p>
          Explore as respostas para as dúvidas mais comuns e entenda por que o
          Alpha Jr é a escolha certa pra alavancar sua carreira.
        </p>
        <br />
        <div className="btn-primary">
          <p>
            <strong>Ainda possui alguma dúvida?</strong>
            <br />
            <a href="mailto:fk.s.o.dev@gmail.com" className="mail">
              fk.s.o.dev@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
              <span 
                className="faq-icon" 
                style={{transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)"}}
              >
                +
              </span>
            </button>
            <div 
              id={`faq-answer-${index}`} 
              className={`faq-answer ${openIndex === index ? "open" : ""}`} 
              role="region"
              aria-hidden={openIndex !== index}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
