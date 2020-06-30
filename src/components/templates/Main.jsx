import React from 'react'
import '../css/main.css'

import web from '../../assets/projects/web.png'
import web1 from '../../assets/projects/web1.png'
import mob from '../../assets/projects/mobile.png'
import mob1 from '../../assets/projects/mobile1.png'

import pdf from '../../assets/projects/pdf.png'
import pdf1 from '../../assets/projects/pdf1.png'
import pdf2 from '../../assets/projects/pdf2.png'

export default props =>
    <main>
        <div className="services">
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
                            Faço Back-Ends com melhores tipos de conceitos, utilizando ferramentas para melhor abtenção
                            de resultado e clareza na programação, para que sei Back-End rode limpo e eficiente.
                    </p>
                    </div>
                </li>
                <li>
                    <img src="https://img.icons8.com/fluent/48/000000/pdf.png" alt="OrçamentoPdf" />
                    <div><h3>Orçamentos em PDF para sua empresa</h3></div>
                    <div>
                        <p>
                            Orçamentos em PDF ? Sim, melhores resultados na hora de mandar seus orçamentos para
                            seus clientes, ou por whatsapp ou e-mail. Desenvolvo aplicação web para que você possa
                            fazer seus orçamentos on-line, rápido e pratico. Sem necessidade de gastar papel !!
                    </p>
                    </div>
                </li>
            </div>
        </div>
        <div className="portifo">
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
                    <span>Orçamento feito para navegador tanto, para computador como celular, tablet etc.</span>
                    <div className="container-imgs">
                        <img src={pdf2} className="pdf" alt="webproject"/>
                        <img src={pdf1} className="pdf" alt="webproject"/>
                        <img src={pdf} className="pdf" alt="webproject"/>
                    </div>
                </li>
            </div>
        </div>
    </main>