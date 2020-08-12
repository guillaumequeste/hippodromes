import React, { Component } from 'react'
import Header from './Header'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

class Saint_Malo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Saint-Malo',
            image: 'saint-malo.jpg',
            piste: 'herbe et sable',
            corde: 'droite',
            circonference: '1 500 m',
            region: 'Bretagne',
            departement: 'Ile-et-Vilaine',
            ville: 'Saint-Malo',
            surnom: "hippodrome de Marville"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/saint-malo/saint-malo.jpg')
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
                            <img src={require('../img/saint-malo/saint-malo2.jpg')} alt='saint-malo2' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint-malo/saint-malo3.jpg')} alt='saint-malo3' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint-malo/saint-malo4.jpg')} alt='saint-malo4' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint-malo/saint-malo5.jpg')} alt='saint-malo5' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint-malo/saint-malo6.jpg')} alt='saint-malo6' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint-malo/saint-malo7.jpg')} alt='saint-malo7' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint-malo/saint-malo8.jpg')} alt='saint-malo8' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint-malo/saint-malo9.jpg')} alt='saint-malo9' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint-malo/saint-malo10.jpg')} alt='saint-malo10' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint-malo/saint-malo11.jpg')} alt='saint-malo11' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Saint_Malo