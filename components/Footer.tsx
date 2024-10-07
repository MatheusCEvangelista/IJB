import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <img src="/path/to/logo.png" alt="Logo Instituto João de Barro" />
          <p>Instituto João de Barro</p>
          <p>Endereço, Telefone, etc.</p>
        </div>
        <div className="footer-right">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <div className="social-icons">
            <a href="#"><i className="icon-instagram"></i></a>
            <a href="#"><i className="icon-facebook"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
