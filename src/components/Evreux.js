import React, { Component } from 'react'
import Header from './Header'

class Evreux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Evreux',
            image: 'evreux.jpg',
            piste: 'herbe',
            corde: 'droite',
            circonference: '1 500 m',
            region: 'Haute-Normandie',
            departement: 'Eure',
            ville: 'Evreux',
            surnom: "hippodrome de Navarre"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/evreux/evreux.jpg')
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
                        <img src={require('../img/evreux/evreux2.jpg')} alt='evreux2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/evreux/evreux3.jpg')} alt='evreux3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/evreux/evreux4.jpg')} alt='evreux4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/evreux/evreux5.jpg')} alt='evreux5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/evreux/evreux6.jpg')} alt='evreux6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/evreux/evreux7.jpg')} alt='evreux7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/evreux/evreux8.jpg')} alt='evreux8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/evreux/evreux9.jpg')} alt='evreux9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/evreux/evreux10.jpg')} alt='evreux10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/evreux/evreux11.jpg')} alt='evreux11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/evreux/evreux12.jpg')} alt='evreux12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/evreux/evreux13.jpg')} alt='evreux13' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Evreux