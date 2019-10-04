import React, { Component } from 'react'
import Header from './Header'

class La_Capelle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'La Capelle',
            image: 'la_capelle.jpg',
            piste: 'sable de Mouen',
            corde: 'gauche',
            circonference: '1 609 m',
            region: 'Hauts-de-France',
            departement: 'Aisne',
            ville: 'La Capelle',
            surnom: "hippodrome de la Thiérache"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/la_capelle/la_capelle.jpg')
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
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle2.jpg')} alt='la_capelle2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle3.jpg')} alt='la_capelle3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle4.jpg')} alt='la_capelle4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle5.jpg')} alt='la_capelle5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle6.jpg')} alt='la_capelle6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle7.jpg')} alt='la_capelle7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle8.jpg')} alt='la_capelle8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle9.jpg')} alt='la_capelle9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle10.jpg')} alt='la_capelle10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle11.jpg')} alt='la_capelle11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle12.jpg')} alt='la_capelle12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle13.jpg')} alt='la_capelle13' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle14.jpg')} alt='la_capelle14' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle15.jpg')} alt='la_capelle15' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle16.jpg')} alt='la_capelle16' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle17.jpg')} alt='la_capelle17' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle18.jpg')} alt='la_capelle18' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle19.jpg')} alt='la_capelle19' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle20.jpg')} alt='la_capelle20' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_capelle/la_capelle21.jpg')} alt='la_capelle21' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default La_Capelle