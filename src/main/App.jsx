import React from 'react'
import '../components/css/app.css'
import 'font-awesome/css/font-awesome.min.css'
import '../components/js/jquery.js'

import Header from '../components/templates/Header'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'

export default props => 
    <div className="app">
        <Header />
        <Main />
        <Footer />
    </div>