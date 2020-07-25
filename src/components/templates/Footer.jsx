import React from 'react'
import '../css/footer.css'

export default props =>
    <footer>
        <div className="footer">
            <div>
                <h3>Siga-me nas redes sociais</h3>
                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/daniel.urbaneki"><i className="fa fa-facebook"></i> Facebook</a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/daniel.urbaneki/"><i className="fa fa-instagram"></i> Instagram</a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/daniel-urbaneki-dos-santos-79a79a1b0/"><i className="fa fa-linkedin"></i> Linkedin</a>
            </div>
            <div>
                <h3>Acesso rápido</h3>
                <a href="#home">Home</a>
                <a href="#contato">Contato</a>
                <a href="#portifolio">Portifólio</a>
                <a href="#sobre">Sobre</a>
            </div>
            <div>
                <h3>Sobre mim</h3>
                <p>Alguém que quer mudar para melhor as suas experiências com a internet, mostrar para o mundo
                    o seu trabalho e conectar o máximo de pessoas possível. Fazer ser acessível para todos o que você faz
                     de melhor, e assim facilitar sua vida com o que a internet tem a oferecer !!
            </p>
            </div>
        </div>
        <div className="copyright">
            <span>© Copyright 2020.</span>
        </div>
    </footer>