import Image from 'next/image';
import Link from 'next/link'; // Do Next.js
import '../section_header/Header.css';

const Header = () => {
  return (
    <header className="menu">
      <div className="logo">
        <Image src="/assets/images/logofk.png" alt="Logo" width={100} height={50} />
      </div>
      <nav className="menu-secoes" aria-label='Navegação principal'>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/#quem-e-isfrankle">QUEM É ISFRANKLE</Link>
          </li>
          <li>
            <Link href="/#o-que-voce-ganha">METODO ALPHA JR</Link>
          </li>
          <li>
            <Link href="/transforme_seu_negocio">TRANSFORME SEU NEGOCIO</Link>
          </li>
           <li>
            <Link href="/loja_fk">LOJA FK</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
