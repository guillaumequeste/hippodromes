import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

class Mauquenchy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Mauquenchy',
            image: 'mauquenchy.jpg',
            piste: 'sable',
            corde: 'gauche',
            circonference: '1 300 m',
            region: 'Haute-Normandie',
            departement: 'Seine-Maritime',
            ville: 'Forges-les-Eaux',
            surnom: "hippodrome du Pays de Bray"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/mauquenchy/mauquenchy.jpg')
            } catch (err) {
                return require('../img/paint.jpg')
            }
        }
        return (
            <div>
                <Header />
                <Footer />
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
                            <img src={require('../img/mauquenchy/mauquenchy2.jpg')} alt='mauquenchy2' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/mauquenchy/mauquenchy3.jpg')} alt='mauquenchy3' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/mauquenchy/mauquenchy4.jpg')} alt='mauquenchy4' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/mauquenchy/mauquenchy5.jpg')} alt='mauquenchy5' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/mauquenchy/mauquenchy6.jpg')} alt='mauquenchy6' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/mauquenchy/mauquenchy7.jpg')} alt='mauquenchy7' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/mauquenchy/mauquenchy8.jpg')} alt='mauquenchy8' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/mauquenchy/mauquenchy9.jpg')} alt='mauquenchy9' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/mauquenchy/mauquenchy10.jpg')} alt='mauquenchy10' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/mauquenchy/mauquenchy11.jpg')} alt='mauquenchy11' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Mauquenchy