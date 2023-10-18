import "./Header.scss";

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <h1 className="title-container">
          Estúdio <span>Gael</span>
        </h1>

        <ul className="menu-options">
          <li>Projetos</li>
          <li>Contato</li>
          <li>Example</li>
        </ul>

        <button className="contact-button">Contato</button>
      </header>
    </div>
  );
};

export default Header;
