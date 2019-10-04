import React, { Component } from 'react'
import Header from './Header'

class Chartres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Chartres',
            image: 'chartres.jpg',
            piste: 'sable',
            corde: 'gauche',
            circonference: '1 003 m',
            region: 'Centre-Val de Loire',
            departement: 'Eure-et-Loire',
            ville: 'Chartres',
            surnom: "hippodrome de Chartres"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/chartres/chartres.jpg')
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
                        <img src={require('../img/chartres/chartres2.jpg')} alt='chartres2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/chartres/chartres3.jpg')} alt='chartres3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/chartres/chartres4.jpg')} alt='chartres4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/chartres/chartres5.jpg')} alt='chartres5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/chartres/chartres6.jpg')} alt='chartres6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/chartres/chartres7.jpg')} alt='chartres7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/chartres/chartres8.jpg')} alt='chartres8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/chartres/chartres9.jpg')} alt='chartres9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/chartres/chartres10.jpg')} alt='chartres10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/chartres/chartres11.jpg')} alt='chartres11' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chartres