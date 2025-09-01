# 🚀 Projeto Fullstack - Next.js + Node.js + Docker

Este repositório contém a aplicação **frontend (Next.js)** e **backend (Node.js/Express)**, preparados para rodar tanto em ambiente local quanto em produção com **Docker**.  
O projeto foi desenvolvido com foco em **boas práticas, escalabilidade e deploy fácil**.

---

## 📂 Estrutura do Projeto

```bash
.
├── backend/            # API em Node.js / Express
│   ├── src/
│   ├── package.json
│   └── Dockerfile
│
├── frontend/           # Frontend em Next.js
│   ├── pages/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml  # Orquestração dos serviços
├── .gitignore
└── README.md
⚙️ Como Rodar Localmente
1. Clonar o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

2. Instalar dependências
cd backend && npm install
cd ../frontend && npm install

3. Rodar localmente

Backend:

cd backend
npm run dev


Frontend:

cd frontend
npm run dev


Acesse: http://localhost:3000

🐳 Rodando com Docker
docker-compose up --build -d


Frontend → http://localhost:3000

Backend → http://localhost:5000

🌐 Deploy
Vercel (Frontend)

Conectar o repositório no painel da Vercel

Definir as variáveis de ambiente

Deploy automático a cada push na main

Servidor próprio (Docker)
docker-compose up --build -d

📌 Boas Práticas

Usar branchs descritivas:

feature/nome-da-feature

fix/nome-do-bug

docs/ajuste-readme

Commits no padrão:

feat: adiciona autenticação JWT

fix: corrige bug no login

docs: atualiza instruções de instalação

👨‍💻 fk_s.o.dev

Projeto desenvolvido por fk_s.o.dev ✨
Entre em contato: LinkedIn
 | Portfólio


---

👉 Esse conteúdo já vai deixar seu `README.md` com cara de projeto **profissional no GitHub**.  

Quer que eu te monte também a **versão com badges** (status do build, versão do Node, Docker, etc.) pra 