import React, { Component } from 'react'
import Header from './Header'

class Maure_de_Bretagne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Maure de Bretagne',
            image: 'maure_de_bretagne.jpg',
            piste: 'herbe et sable',
            corde: 'gauche',
            circonference: '1 300 m',
            region: 'Bretagne',
            departement: 'Ile-et-Vilaine',
            ville: 'Rennes',
            surnom: "hippodrome des Bruyères"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/maure_de_bretagne/maure_de_bretagne.jpg')
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
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne2.jpg')} alt='maure_de_bretagne2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne3.jpg')} alt='maure_de_bretagne3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne4.jpg')} alt='maure_de_bretagne4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne5.jpg')} alt='maure_de_bretagne5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne6.jpg')} alt='maure_de_bretagne6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne7.jpg')} alt='maure_de_bretagne7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne8.jpg')} alt='maure_de_bretagne8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne9.jpg')} alt='maure_de_bretagne9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne10.jpg')} alt='maure_de_bretagne10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne11.jpg')} alt='maure_de_bretagne11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne12.jpg')} alt='maure_de_bretagne12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne13.jpg')} alt='maure_de_bretagne13' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne14.jpg')} alt='maure_de_bretagne14' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/maure_de_bretagne/maure_de_bretagne15.jpg')} alt='maure_de_bretagne15' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Maure_de_Bretagne