import React, { Component } from 'react'
import Header from './Header'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

class Saint_Aubin_les_Elbeuf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Saint-Aubin-lès-Elbeuf',
            image: 'saint_aubin.jpg',
            piste: 'sable',
            corde: 'gauche',
            circonference: '1 000 m',
            region: 'Haute-Normandie',
            departement: 'Seine-Maritime',
            ville: 'Rouen',
            surnom: "hippodrome des Brulins"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/saint_aubin/saint_aubin.jpg')
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
                            <img src={require('../img/saint_aubin/saint_aubin2.jpg')} alt='saint_aubin2' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin3.jpg')} alt='saint_aubin3' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin4.jpg')} alt='saint_aubin4' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin5.jpg')} alt='saint_aubin5' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin6.jpg')} alt='saint_aubin6' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin7.jpg')} alt='saint_aubin7' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin8.jpg')} alt='saint_aubin8' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin9.jpg')} alt='saint_aubin9' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin10.jpg')} alt='saint_aubin10' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin11.jpg')} alt='saint_aubin11' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin12.jpg')} alt='saint_aubin12' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin13.jpg')} alt='saint_aubin13' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin14.jpg')} alt='saint_aubin14' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin15.jpg')} alt='saint_aubin15' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin16.jpg')} alt='saint_aubin16' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/saint_aubin/saint_aubin17.jpg')} alt='saint_aubin17' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Saint_Aubin_les_Elbeuf