import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">INSTITUTO JOÃO DE BARRO</div>
        <nav className="nav">
          <a href="#">Projetos</a>
          <a href="#">Notícias</a>
          <a href="#">Beneficiários</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Transforme Vidas</a>
          <a href="#">Fale Conosco</a>
        </nav>
        <button className="cta">Doe Agora</button>
      </div>
    </header>
  );
};

export default Header;
