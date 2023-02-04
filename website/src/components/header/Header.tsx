import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <a className="logoLink" href="./">
          PSTR lab
        </a>
      </h1>
      <a href="./checkout" className="checkout-button">
        Kassa
      </a>
    </header>
  );
};

export default Header;
