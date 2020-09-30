import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

class Rambouillet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Rambouillet',
            image: 'rambouillet01.jpg',
            piste: 'herbe',
            corde: 'gauche',
            circonference: '1 800 m',
            region: 'Ile-de-France',
            departement: 'Yvelines',
            ville: 'Rambouillet',
            surnom: "hippodrome de la Villeneuve"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/rambouillet/rambouillet01.jpg')
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
                            <img src={require('../img/rambouillet/rambouillet02.jpg')} alt='rambouillet02' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet03.jpg')} alt='rambouillet03' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet04.jpg')} alt='rambouillet04' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet05.jpg')} alt='rambouillet05' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet06.jpg')} alt='rambouillet06' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet07.jpg')} alt='rambouillet07' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet08.jpg')} alt='rambouillet08' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet09.jpg')} alt='rambouillet09' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet10.jpg')} alt='rambouillet10' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet11.jpg')} alt='rambouillet11' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet12.jpg')} alt='rambouillet12' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet13.jpg')} alt='rambouillet13' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet14.jpg')} alt='rambouillet14' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet15.jpg')} alt='rambouillet15' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet16.jpg')} alt='rambouillet16' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet17.jpg')} alt='rambouillet17' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet18.jpg')} alt='rambouillet18' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet19.jpg')} alt='rambouillet19' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet20.jpg')} alt='rambouillet20' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet21.jpg')} alt='rambouillet21' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet22.jpg')} alt='rambouillet22' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet23.jpg')} alt='rambouillet23' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet24.jpg')} alt='rambouillet24' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet25.jpg')} alt='rambouillet25' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet26.jpg')} alt='rambouillet26' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet27.jpg')} alt='rambouillet27' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
                <div className="plusDePhotos">
                    <Zoom>
                        <div className="image">
                            <img src={require('../img/rambouillet/rambouillet28.jpg')} alt='rambouillet28' className="tailleImagePlus"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Rambouillet