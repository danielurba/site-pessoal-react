import React, { Component } from 'react'
import '../css/header.css'

import $ from 'jquery'

import Post1 from '../../assets/img/post1.jpg'

import Logo from '../../assets/img/programer2.png'

export default class Header extends Component {
    addToogle() {
        $('#menutoogle').toggleClass('barratoogle')
        $('#menutoogle').toggleClass('menuoff')
        $('#menu').toggleClass('corfundotoogle')
        $('.toogle > i').toggleClass('fa-bars')
        $('.toogle > i').toggleClass('fa-sign-out')
    }

    render() {
        return (
            <header>
                <div id="menu" className="menu">
                    <a href="/">
                        <img src={Logo} alt="Programador" className="logo" />
                    </a>
                    <div id="barra" className="barra">
                        <a href="#home">Home</a>
                        <a href="#servicos">Serviços</a>
                        <a href="#portifolio">Portifólio</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#contato">Contato</a>
                    </div>
                    <div className="icons">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/daniel.urbaneki/">
                            <i className="fa fa-instagram" ariade-hidden="true"></i>
                        </a>
                        <a rel="noopener noreferrer" target="_blanck" href="https://www.facebook.com/daniel.urbaneki">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/daniel-urbaneki-dos-santos-79a79a1b0/">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                    <span className="toogle" role="button" onClick={this.addToogle}>
                        <i className="fa fa-bars fa-2x"></i>
                    </span>
                </div>
                <div id="menutoogle" className="menuoff">
                    <a href="#home">Home</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#portifolio">Portifólio</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                </div>
                <div className="back">
                    <img src={Post1} alt="programer" />
                </div>
                <div className="info" id="home">
                    <h1>DANIEL URBANEKI</h1>
                    <span>DESENVOLVEDOR WEB</span>
                    <span>FREELANCER</span>
                    <span>BACK-END</span>
                    <span>FRONT-END</span>
                    <span>PROGRAMADOR EM JAVASCRIPT</span>
                </div>
            </header>
        )
    }
}