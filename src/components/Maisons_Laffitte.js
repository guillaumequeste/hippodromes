import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

class Maisons_Laffitte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Maisons Laffitte',
            image: 'maisons_laffitte.jpg',
            piste: 'herbe',
            corde: 'gauche et droite',
            circonference: '2 000 m',
            region: 'Ile de France',
            departement: 'Yvelines',
            ville: 'Maisons-Laffitte',
            surnom: "hippodrome de Maisons-Laffitte"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/maisons_laffitte/maisons_laffitte.jpg')
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
                            <img src={require('../img/maisons_laffitte/maisons_laffitte2.jpg')} alt='maisons_laffitte2' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte3.jpg')} alt='maisons_laffitte3' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte4.jpg')} alt='maisons_laffitte4' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte5.jpg')} alt='maisons_laffitte5' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte6.jpg')} alt='maisons_laffitte6' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte7.jpg')} alt='maisons_laffitte7' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte8.jpg')} alt='maisons_laffitte8' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte9.jpg')} alt='maisons_laffitte9' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte10.jpg')} alt='maisons_laffitte10' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte11.jpg')} alt='maisons_laffitte11' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte12.jpg')} alt='maisons_laffitte12' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte13.jpg')} alt='maisons_laffitte13' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte14.jpg')} alt='maisons_laffitte14' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/maisons_laffitte/maisons_laffitte15.jpg')} alt='maisons_laffitte15' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Maisons_Laffitte