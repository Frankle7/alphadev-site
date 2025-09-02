// LojaFK.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import './HomeLojaFk.css';

const produtos = [
    {
        id: 1,
        nome: 'Camiseta Terminal (preto)',
        preco: 'R$69,90',
        detalhes: 'Tamanhos P/M/G',
        imagem: '/assets/images/camiseta-terminal.jpeg',
        destaque: '🔥 Mais vendido',
        descricao: 'Camiseta feita com algodão premium para devs que amam terminal.',
        medidas: 'P: 70x50cm | M: 75x55cm | G: 80x60cm',
        estrelas: 4.8,
        reviews: 128,
        linkCompra: 'https://produto.mercadolivre.com.br/MLB-1780783812-camisetas-camisa-anonymous-legio-hackers-digital-hd-05-_JM'

    },
    {
        id: 2,
        nome: 'Caneca Syntax Error',
        preco: 'R$39,90',
        detalhes: '300ml',
        imagem: '/assets/images/caneca-syntax.jpeg',
        destaque: '☕ Estilo Dev',
        descricao: 'Caneca resistente com estampa “Syntax Error”. Ideal para café ou código.',
        medidas: 'Altura: 9,5cm | Diâmetro: 8cm',
        estrelas: 4.6,
        reviews: 89,
        linkCompra: 'https://produto.mercadolivre.com.br/MLB-1780783812-camisetas-camisa-anonymous-legio-hackers-digital-hd-05-_JM'

    },
    {
        id: 3,
        nome: 'Moletom Hacker Style',
        preco: 'R$119,90',
        detalhes: 'Tamanhos P/M/G',
        imagem: '/assets/images/moletom-hacker.jpeg',
        destaque: '🧥 Conforto hacker',
        descricao: 'Moletom forrado e confortável, perfeito para sessões longas de codificação.',
        medidas: 'P: 65x50cm | M: 70x55cm | G: 75x60cm',
        estrelas: 5.0,
        reviews: 211,
        linkCompra: 'https://produto.mercadolivre.com.br/MLB-1780783812-camisetas-camisa-anonymous-legio-hackers-digital-hd-05-_JM'

    }
];

const LojaFK = () => {
    const [detalheAberto, setDetalheAberto] = useState<number | null>(null);

    const toggleDetalhes = (id: number) => {
        setDetalheAberto(detalheAberto === id ? null : id);
    };

    return (
        <section className="loja-container">
            <motion.section
                className="banner"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2>Vista sua linguagem.</h2>
            </motion.section>

            <section className="produtos">
                {produtos.map((p) => (
                    <motion.div
                        className="produto"
                        key={p.id}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        <div className="imagem-container">
                            <div className="imagem-wrapper">
                                <Image src={p.imagem} alt={p.nome} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <span className="destaque">{p.destaque}</span>
                        </div>
                        <h3>{p.nome}</h3>
                        <span className="marca">FK Codewear</span>
                        <span className="preco">{p.preco} - {p.detalhes}</span>
                        <button onClick={() => toggleDetalhes(p.id)} className="btn">
                            {detalheAberto === p.id ? 'Ver menos' : 'Ver detalhes'}
                        </button>

                        <AnimatePresence>
                            {detalheAberto === p.id && (
                                <motion.div
                                    className="detalhes-produto"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="detalhes-grid">
                                        <div className="col">
                                            <p><strong>Descrição:</strong><br /> {p.descricao}</p>
                                            <p><strong>Medidas:</strong><br /> {p.medidas}</p>
                                        </div>
                                        <div className="col">
                                            <p><strong>Avaliação:</strong><br /> {'⭐'.repeat(Math.round(p.estrelas))} ({p.estrelas} / 5.0)</p>
                                            <p>{p.reviews} avaliações</p>
                                            <p><strong>Garantia:</strong><br /> Compra segura com reembolso garantido.</p>
                                        </div>
                                    </div>
                                    <div className="acoes-produto">
                                        <a
                                            href={p.linkCompra}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn primario"
                                        >
                                            Comprar agora
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </section>

        </section>
    );
};

export default LojaFK;
