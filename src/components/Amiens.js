import React, { Component } from 'react'
import Header from './Header'

class Amiens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Amiens',
            image: 'amiens.jpg',
            piste: 'herbe et pouzzolane',
            corde: 'droite',
            circonference: '1 262 m',
            region: 'Hauts-de-France',
            departement: 'Somme',
            ville: 'Amiens',
            surnom: "hippodrome du petit Saint-Jean"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/amiens/amiens.jpg')
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
                        <img src={require('../img/amiens/amiens2.jpg')} alt='amiens2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/amiens/amiens3.jpg')} alt='amiens3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/amiens/amiens4.jpg')} alt='amiens4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/amiens/amiens5.jpg')} alt='amiens5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/amiens/amiens6.jpg')} alt='amiens6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/amiens/amiens7.jpg')} alt='amiens7' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Amiens