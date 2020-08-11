import React, { Component } from 'react'
import Header from './Header'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

class Fontainebleau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Fontainebleau',
            image: 'fontainebleau.jpg',
            piste: 'herbe',
            corde: 'gauche',
            circonference: '2 000 m',
            region: 'Ile-de-France',
            departement: 'Seine-et-Marne',
            ville: 'Fontainebleau',
            surnom: "hippodrome de la Solle"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/fontainebleau/fontainebleau.jpg')
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
                            <img src={require('../img/fontainebleau/fontainebleau2.jpg')} alt='fontainebleau2' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/fontainebleau/fontainebleau3.jpg')} alt='fontainebleau3' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                    <div className="image">
                        <img src={require('../img/fontainebleau/fontainebleau4.jpg')} alt='fontainebleau4' className="tailleImagePlus"/>
                    </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/fontainebleau/fontainebleau5.jpg')} alt='fontainebleau5' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/fontainebleau/fontainebleau6.jpg')} alt='fontainebleau6' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/fontainebleau/fontainebleau7.jpg')} alt='fontainebleau7' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/fontainebleau/fontainebleau8.jpg')} alt='fontainebleau8' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/fontainebleau/fontainebleau9.jpg')} alt='fontainebleau9' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/fontainebleau/fontainebleau10.jpg')} alt='fontainebleau10' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/fontainebleau/fontainebleau11.jpg')} alt='fontainebleau11' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Fontainebleau