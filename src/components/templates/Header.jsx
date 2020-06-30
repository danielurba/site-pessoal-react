import React from 'react'
import '../css/header.css'

import Post1 from '../../assets/img/post1.jpg'

import Logo from '../../assets/img/programer2.png'

export default props =>
    <header>
        <div id="menu" className="menu">
            <img src={Logo} alt="Programador" className="logo" />
            <div id="barra" className="barra">
                <a href="/">Home</a>
                <a href="/">Serviços</a>
                <a href="/">Portifólio</a>
                <a href="/">Blog</a>
                <a href="/">Sobre</a>
                <a href="/">Contato</a>
            </div>
            <div className="icons">
                <a href="/">
                    <i className="fa fa-instagram" ariade-hidden="true"></i>
                </a>
                <a href="/">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="/">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
        </div>
        <div className="back">
            <img src={Post1} alt="programer"/>
        </div>
        <div className="info">
            <h1>DANIEL URBANEKI</h1>
            <span>DESENVOLVEDOR WEB</span>
            <span>FREELANCER</span>
            <span>BACK-END</span>
            <span>FRONT-END</span>
            <span>PROGRAMADOR EM JAVASCRIPT</span>
        </div>
    </header>