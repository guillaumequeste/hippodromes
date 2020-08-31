import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Contact extends Component {
    
    render () {
        return (
            <div>
                <Header />
                <Footer />
                <div className="bodyContact">
                    <div className="contact">
                        <p>guillaume.queste@laposte.net</p>
                        <p>http://www.guillaumequeste.fr</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact