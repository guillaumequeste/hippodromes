import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    render () {
        return (
            <div className="bodyHeader">
                <Link to="/" className="link">Accueil</Link>
                <Link to="/contact" className="link">@</Link>
            </div>
        )
    }
}

export default Header