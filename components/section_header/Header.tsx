"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../section_header/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="menu">
      {/* LOGO */}
      <div className="logo">
        <Image
          src="/assets/images/logofk.png"
          alt="Logo"
          width={100}
          height={50}
        />
      </div>

      {/* BOTÃO HAMBURGUER */}
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* MENU DE LINKS */}
      <nav className={`menu-secoes ${isOpen ? "active" : ""}`} aria-label="Navegação principal">
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/#quem-e-isfrankle">QUEM É ISFRANKLE</Link></li>
          <li><Link href="/#o-que-voce-ganha">METODO ALPHA JR</Link></li>
          <li><Link href="/transforme_seu_negocio">TRANSFORME SEU NEGOCIO</Link></li>
          <li><Link href="/loja_fk">LOJA FK</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
