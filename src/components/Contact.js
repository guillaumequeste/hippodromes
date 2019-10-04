import React, { Component } from 'react'
import Header from './Header'

class Contact extends Component {
    
    render () {
        return (
            <div>
                <Header />
                <div className="bodyContact">
                    <div className="contact">
                        <h1>guillaume.queste@laposte.net</h1>
                        <h1>http://www.guillaumequeste.fr</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact