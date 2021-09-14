import React from 'react';
import './Header.css';


const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo Netflix" />
                </a>
            </div>
            <div className="header--list">
            <ul>
                <li>
                    <a href='/'>Início</a></li>
                <li>
                    <a href='/'>Séries</a></li>
                <li>
                    <a href="/">Filmes</a></li>
                <li>
                    <a href="/">Bombando</a></li>
                <li>
                    <a href="/">Minha Lista</a></li>
            </ul>
        </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}

export default Header;