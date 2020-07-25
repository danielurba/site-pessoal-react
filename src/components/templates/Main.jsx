import React from 'react'
import '../css/main.css'

import web from '../../assets/projects/web.png'
import web1 from '../../assets/projects/web1.png'
import mob from '../../assets/projects/mobile.png'
import mob1 from '../../assets/projects/mobile1.png'

import pdf from '../../assets/projects/pdf.png'
import pdf1 from '../../assets/projects/pdf1.png'
import pdf2 from '../../assets/projects/pdf2.png'
import pdf3 from '../../assets/projects/pdf3.png'

import sobremin from '../../assets/projects/sobremin.png'

export default props =>
    <main>
        <div className="services" id="servicos">
            <div className="title">
                <div>
                    <h2>Serviços</h2>
                </div>
            </div>
            <div className="works">
                <li>
                    <img src="https://img.icons8.com/fluent/48/000000/web-design.png" alt="Web" />
                    <div><h3>Criação de Sites</h3></div>
                    <div>
                        <p>Desenvolvedor de sites, em JavaScript, CSS, Html, MySql e etc.</p>
                    </div>
                </li>
                <li>
                    <img src="https://img.icons8.com/dusk/48/000000/html-5.png" alt="Html5" />
                    <div><h3>Desenvolverdor Front-End</h3></div>
                    <div>
                        <p>Desenvolvo site com os mais modernos frameworks da atualidade, como
                        bootstrap, jQuery, Angular 9, React, VueJs e etc.
                    </p>
                    </div>
                </li>
                <li>
                    <img src="https://img.icons8.com/officel/48/000000/api-settings.png" alt="back-end" />
                    <div><h3>Desenvolvedor Back-End</h3></div>
                    <div>
                        <p>
                            Faço back-end com os melhores tipos de conceitos, utilizando ferramentas para melhor abtenção
                            de resultado e clareza na programação, para que seu Back-End rode limpo e eficiente.
                    </p>
                    </div>
                </li>
                <li>
                    <img src="https://img.icons8.com/dusk/48/000000/cell-phone.png" alt="Aplicativos"/>
                    <div><h3>Desenvolvedor de Aplicativos</h3></div>
                    <div>
                        <p>
                            Desenvolvimento de aplicativos para Celulares (Android, IOS, Tablets e etc).
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://img.icons8.com/dusk/48/000000/computer.png" alt="Computador"/>
                    <div><h3>Desenvolvimento de Programas Desktop</h3></div>
                    <div>
                        <p>
                            Faço aplicações para Computadores (windows, linux e etc).
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://img.icons8.com/fluent/48/000000/pdf.png" alt="OrçamentoPdf" />
                    <div><h3>Orçamentos em PDF para sua empresa</h3></div>
                    <div>
                        <p>
                            Orçamentos em PDF ? Sim, melhores resultados na hora de mandar seus orçamentos para
                            seus clientes, ou por whatsapp ou e-mail. Desenvolvo aplicativo para que você possa
                            fazer seus orçamentos, rápidos e praticos. Sem necessidade de gastar papel !!
                    </p>
                    </div>
                </li>
            </div>
        </div>
        <div className="portifo" id="portifolio">
            <div className="title">
                <div>
                    <h2>Portifólio</h2>
                </div>
            </div>
            <div className="porti-itens">
                <li>
                    <img src="https://img.icons8.com/fluent/48/000000/web-design.png" alt="Web" />
                    <div><h3>Primeiro site feito - Personal Car</h3></div>
                    <section>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.personalcarcvel.com.br/">www.personalcarcvel.com.br</a>
                    </section>
                    <div className="container-imgs">
                        <img src={web} className="web" alt="webproject"/>
                        <img src={web1} className="web" alt="webproject"/>
                        <img src={mob} className="mob" alt="webproject"/>
                        <img src={mob1} className="mob" alt="webproject"/>
                    </div>
                </li>
                <li>
                    <img src="https://img.icons8.com/fluent/48/000000/pdf.png" alt="OrçamentoPdf" />
                    <div><h3>Orçamentos em PDF para sua empresa</h3></div>
                    <section>Um aplicativo para celular que gera orçamento da sua empresa</section>
                    <div className="container-imgs">
                        <img src={pdf2} className="pdf" alt="webproject"/>
                        <img src={pdf1} className="pdf" alt="webproject"/>
                        <img src={pdf} className="pdf" alt="webproject"/>
                        <img src={pdf3} className="pdf" alt="webproject"/>
                    </div>
                </li>
            </div>
        </div>
        <div className="sobre" id="sobre">
            <div className="title">
                <div>
                    <h2>Sobre</h2>
                </div>
            </div>
            <div className="sobre-itens">
                <img src={sobremin} alt="Sobremin" width="400" height="300"/>
                <li>
                    <div><h3>Daniel Urbaneki</h3></div>
                    <p>
                        Programador e Desenvolvedor de sites, aplicativos para Celulares, Tablets e aplicações
                        Desktop. Ainda iniciante na aréa de programação, mas porém com idéias inovadoras.
                        Programando e aprendendo sempre a cada dia, absorvendo conhecimento por onde passo, pegando
                        desafios para fazer e assim sempre inovar com o aprendizado obtido. Amo muito programação, desde meus
                        16 anos de idade já comecei a gostar de fazer códigos, a um ano começei alguns cursos de programação,
                        estou fazendo mais alguns cursos no momento para aumentar minhas capacidades de programação. Não a algo mais satisfatório
                        do que ver algum projeto pronto e em uso. Quero sempre poder fazer o melhor possível para a satisfação de todos.
                    </p>
                    <div>
                        <p>Telefone/Whatsapp: (45)99978-9334 | Cascavel-PR</p>
                    </div>
                </li>
            </div>
        </div>
        <div className="contato" id="contato">
            <div className="title">
                <div>
                    <h2>Contato</h2>
                </div>
            </div>
            <div className="contato-itens">
                <li>
                    <div><h3>Para mais informações entre em contato comigo !!</h3></div>
                    <a rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=5545999789334"><i className="fa fa-whatsapp"></i> WhatsApp (45) 99978-9334</a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/daniel.urbaneki/"><i className="fa fa-instagram"></i> Instagram</a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/daniel.urbaneki"><i className="fa fa-facebook"></i> Facebook</a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/daniel-urbaneki-dos-santos-79a79a1b0/"><i className="fa fa-linkedin"></i> Linkedin</a>
                    <a href="mailto:urba.daniel7@gmail.com"><i className="fa fa-envelope"></i> Me mande um E-mail( urba.daniel7@gmail.com )</a>
                </li>
            </div>
        </div>
    </main>