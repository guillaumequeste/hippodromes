import React, { Component } from 'react'
import Header from './Header'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

class Gournay_en_Bray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Gournay en Bray',
            image: 'gournay.jpg',
            piste: 'mâchefer',
            corde: 'droite',
            circonference: '1 000 m',
            region: 'Haute-Normandie',
            departement: 'Seine-maritime',
            ville: 'Forges-les-Eaux',
            surnom: "hippodrome du Mont Louvet"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/gournay/gournay.jpg')
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
                            <h2 className="titreCard long">{this.state.nom}</h2>
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
                            <img src={require('../img/gournay/gournay2.jpg')} alt='gournay2' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay3.jpg')} alt='gournay3' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay4.jpg')} alt='gournay4' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay5.jpg')} alt='gournay5' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay6.jpg')} alt='gournay6' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay7.jpg')} alt='gournay7' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay8.jpg')} alt='gournay8' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay9.jpg')} alt='gournay9' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay10.jpg')} alt='gournay10' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay11.jpg')} alt='gournay11' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay12.jpg')} alt='gournay12' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay13.jpg')} alt='gournay13' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay14.jpg')} alt='gournay14' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay15.jpg')} alt='gournay15' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay16.jpg')} alt='gournay16' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay17.jpg')} alt='gournay17' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                    <div className="image">
                        <img src={require('../img/gournay/gournay18.jpg')} alt='gournay18' className="tailleImagePlus"/>
                    </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/gournay/gournay19.jpg')} alt='gournay19' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Gournay_en_Bray