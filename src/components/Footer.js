import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'

class Footer extends Component {
    render () {
        return (
            <div className="bodyFooter">
                <div className="divFooter">
                    <Link to="/" className="divFooter2">
                        Accueil
                    </Link>
                </div>
                <div className="divFooter">
                    <Link to="/liste" className="divFooter2">
                        Liste
                    </Link>
                </div>
                <div className="divFooter">
                    <Link to="/contact" className="divFooter2">
                        Ccontact
                    </Link>
                </div>
            </div>
        )
    }
}

export default Footer