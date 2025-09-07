'use client';
import { useState } from 'react';
import './page.css';
import Header from '@/components/section_header/Header';
import Footer from '@/components/section_footer/Footer';

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  rg: string;
  empresa: string;
  mensagem: string;
  aceite: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const Formulario = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    rg: '',
    empresa: '',
    mensagem: '',
    aceite: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
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

  // Máscara simples para RG
  const maskRG = (value: string) => value.replace(/\D/g, '').slice(0, 9);

  // Atualiza valores no formulário
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validação dos campos
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório.';
    else if (!formData.nome.includes(' ')) newErrors.nome = 'Informe seu nome completo.';

    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-mail inválido.';

    if (formData.telefone && !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(formData.telefone))
      newErrors.telefone = 'Telefone inválido. Ex: (11) 91234-5678';

    if (formData.rg && !/^\d{7,9}$/.test(formData.rg))
      newErrors.rg = 'RG inválido. Use apenas números, entre 7 e 9 dígitos.';

    if (!formData.aceite) newErrors.aceite = 'Você precisa aceitar os termos.';

    return newErrors;
  };

  // Envio dos dados
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Valida campos antes de enviar
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      // Cria payload para API
      const payload = {
        name: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        rg: formData.rg,
        empresa: formData.empresa,
        mensagem: formData.mensagem,
        aceite: formData.aceite
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setSubmitted(true);
      } else {
        alert("Erro ao enviar o formulário: " + (result.error || "Erro desconhecido"));
      }
    } catch (err) {
      console.error("Erro no fetch:", err);
      alert("Erro de conexão com o servidor");
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
