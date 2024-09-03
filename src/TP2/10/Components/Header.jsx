import './Header.css';

export default function Header() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#quem-somos">Quem Somos</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
    );
  }