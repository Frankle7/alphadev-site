'use client';
import { useState } from 'react';
import './page.css';
import Header from '@/components/section_header/Header';
import Footer from '@/components/section_footer/Footer';

const Formulario = () => {
  // Dados iniciais preenchidos com exemplo fixo para teste
  // Você pode alterar esses valores, ou deixar vazio para o usuário preencher
  const [formData, setFormData] = useState({
    nome: '',          // Nome exemplo
    email: '',     // Email exemplo
    telefone: '',  // Telefone exemplo
    empresa: '',             // Empresa exemplo
    rg: '',               // RG exemplo (apenas números)
    mensagem: '',                 // Mensagem inicial vazia
    aceite: false                 // Aceite LGPD desmarcado inicialmente
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // Máscara simples para telefone
  const maskTelefone = (value: string) => {
    let v = value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);

    if (v.length <= 2) return `(${v}`;
    if (v.length <= 6) return `(${v.slice(0, 2)}) ${v.slice(2)}`;
    if (v.length <= 10) return `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
    return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  };

  // Máscara simples para RG (apenas números, até 9 dígitos)
  const maskRG = (value: string) => {
    let v = value.replace(/\D/g, '');
    if (v.length > 9) v = v.slice(0, 9);
    return v;
  };

  // Atualiza valores no formulário
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      if (name === 'telefone') {
        setFormData({ ...formData, telefone: maskTelefone(value) });
      } else if (name === 'rg') {
        setFormData({ ...formData, rg: maskRG(value) });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  // Validação simples dos campos
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório.';
    } else if (!formData.nome.trim().includes(' ')) {
      newErrors.nome = 'Informe seu nome completo.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido.';
    }

    if (formData.telefone && !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(formData.telefone)) {
      newErrors.telefone = 'Telefone inválido. Ex: (11) 91234-5678';
    }

    if (formData.rg && !/^\d{7,9}$/.test(formData.rg)) {
      newErrors.rg = 'RG inválido. Use apenas números, entre 7 e 9 dígitos.';
    }

    if (!formData.aceite) {
      newErrors.aceite = 'Você precisa aceitar os termos.';
    }

    return newErrors;
  };

  // Envio dos dados para Google Apps Script
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          'http://localhost:5000/formulario',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );

        const result = await response.json();
        if (result.status === 'success') {
          setSubmitted(true);
        } else {
          alert('Erro ao enviar o formulário: ' + (result.message || 'Erro desconhecido'));
        }
      } catch (error) {
        alert('Erro ao enviar os dados. Verifique a conexão ou o servidor.');
        console.error(error);
      }
    }
  };

  return (
    <>
      <Header />
      <section className="form-section" id="formulario">
        <h2>Fale comigo</h2>
        {submitted ? (
          <p className="success-msg">Formulário enviado com sucesso!</p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nome">Nome completo *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              {errors.nome && <span className="error">{errors.nome}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
              {errors.telefone && <span className="error">{errors.telefone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="rg">RG</label>
              <input
                type="text"
                id="rg"
                name="rg"
                value={formData.rg}
                onChange={handleChange}
              />
              {errors.rg && <span className="error">{errors.rg}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="empresa">Empresa</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Interesse / Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="aceite"
                name="aceite"
                checked={formData.aceite}
                onChange={handleChange}
                required
              />
              <label htmlFor="aceite">
                Li e aceito os <a href="/lgpd" target="_blank">termos de privacidade (LGPD)</a> *
              </label>
              {errors.aceite && <span className="error">{errors.aceite}</span>}
            </div>

            <button type="submit" className="submit-btn">Enviar</button>
          </form>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Formulario;
