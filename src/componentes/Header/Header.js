import React from "react";
import './Header.css';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import search from '../../assets/icons/search.png';

const Header = () => {
    return (

        <main className="main-container">

          <nav className="header__navigation">
            <div className="navigation">
              <button className="arrow-left">
                <img
                  src={smallLeft}
                  alt="Seta esquerda"
                />
              </button>
              <button className="arrow-right">
                <img
                  src={smallRight}
                  alt="Seta direita"
                />
              </button>
            </div>
            <div className="header__search">
              <img src={search} alt="" />
              <input
                id="search-input"
                type="text"
                maxlength="800" autocapitalize="off" spellcheck="false"
                placeholder="O que você quer ouvir?"
              />
            </div>
            <div className="header__login">
              <button className="subscribe">Inscreva-se</button>
              <button className="login">Entrar</button>
            </div>
          </nav>
        </main>
    )
};

export default Header;