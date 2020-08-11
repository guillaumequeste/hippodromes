import React, { Component } from 'react'
import Header from './Header'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

class Dieppe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Dieppe',
            image: 'dieppe.jpg',
            piste: 'herbe',
            corde: 'droite',
            circonference: '2 000 m',
            region: 'Haute-Normandie',
            departement: 'Seine-Maritime',
            ville: 'Dieppe',
            surnom: 'hippodrome de Rouxmesnil-Bouteilles'
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/dieppe/dieppe.jpg')
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
                            <img src={require('../img/dieppe/dieppe2.jpg')} alt='dieppe2' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe3.jpg')} alt='dieppe3' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe4.jpg')} alt='dieppe4' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe5.jpg')} alt='dieppe5' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe6.jpg')} alt='dieppe6' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe7.jpg')} alt='dieppe7' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe8.jpg')} alt='dieppe8' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe9.jpg')} alt='dieppe9' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe10.jpg')} alt='dieppe10' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe11.jpg')} alt='dieppe11' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe12.jpg')} alt='dieppe12' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe13.jpg')} alt='dieppe13' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe14.jpg')} alt='dieppe14' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe15.jpg')} alt='dieppe15' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe16.jpg')} alt='dieppe16' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe17.jpg')} alt='dieppe17' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe18.jpg')} alt='dieppe18' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe19.jpg')} alt='dieppe19' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe20.jpg')} alt='dieppe20' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe21.jpg')} alt='dieppe21' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe22.jpg')} alt='dieppe22' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe23.jpg')} alt='dieppe23' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe24.jpg')} alt='dieppe24' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/dieppe/dieppe25.jpg')} alt='dieppe25' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="photoLarge">
                    <Zoom>
                        <div className="imageLarge">
                            <img src={require('../img/dieppe/dieppe26.jpg')} alt='dieppe26' className="tailleImageLarge"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Dieppe