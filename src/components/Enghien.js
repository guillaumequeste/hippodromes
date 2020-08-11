import React, { Component } from 'react'
import Header from './Header'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

class Enghien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Enghien',
            image: 'enghien.jpg',
            piste: 'sable',
            corde: 'gauche',
            circonference: '1 200 m',
            region: 'Ile-de-France',
            departement: "Val-d'Oise",
            ville: 'Enghien-les-Bains',
            surnom: "hippodrome d'Enghien-Soisy"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/enghien/enghien.jpg')
            } catch (err) {
                return require('../img/paint.jpg')
            }
        }
        return (
            <div>
                <Header />
                <div className="fiche">
                    <div className="image">
                        <img src={requireImage(this.state.image)} alt={this.state.nom} className="tailleImage"/>
                    </div>
                    <Roll right>
                        <div className="description">
                            <h2 className="titreCard">{this.state.nom}</h2>
                            <ul>
                                <li className="liCard"><strong>Piste : </strong>{this.state.piste}</li>
                                <li className="liCard"><strong>Corde : </strong>{this.state.corde}</li>
                                <li className="liCard"><strong>Circonference : </strong>{this.state.circonference}</li>
                                <li className="liCard"><strong>Région : </strong>{this.state.region}</li>
                                <li className="liCard"><strong>Département : </strong>{this.state.departement}</li>
                                <li className="liCard"><strong>Ville à proximité : </strong>{this.state.ville}</li>
                                <li className="liCard"><strong>Surnom : </strong>{this.state.surnom}</li>
                                <li className="liCard"><i>&darr; + de photos &darr;</i></li>
                            </ul>
                        </div>
                    </Roll>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/enghien/enghien2.jpg')} alt='enghien2' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/enghien/enghien3.jpg')} alt='enghien3' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Enghien