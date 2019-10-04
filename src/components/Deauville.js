import React, { Component } from 'react'
import Header from './Header'

class Deauville extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Deauville',
            image: 'deauville.jpg',
            piste: 'herbe et PSF',
            corde: 'droite',
            circonference: '2 000 m',
            region: 'Basse-Normandie',
            departement: 'Calvados',
            ville: 'Deauville',
            surnom: "hippodrome de Deauville-la-Touques"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/deauville/deauville.jpg')
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
                        <img src={require('../img/deauville/deauville2.jpg')} alt='deauville2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/deauville/deauville3.jpg')} alt='deauville3' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Deauville