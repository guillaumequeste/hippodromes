import React, { Component } from 'react'
import Header from './Header'

class Cabourg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Cabourg',
            image: 'cabourg.jpg',
            piste: 'sable',
            corde: 'droite',
            circonference: '1 275 m',
            region: 'Basse-Normandie',
            departement: 'Calvados',
            ville: 'Cabourg',
            surnom: "hippodrome de Cabourg"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/cabourg/cabourg.jpg')
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
                        <img src={require('../img/cabourg/cabourg2.jpg')} alt='cabourg2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg3.jpg')} alt='cabourg3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg4.jpg')} alt='cabourg4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg5.jpg')} alt='cabourg5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg6.jpg')} alt='cabourg6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg7.jpg')} alt='cabourg7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg8.jpg')} alt='cabourg8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg9.jpg')} alt='cabourg9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg10.jpg')} alt='cabourg10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg11.jpg')} alt='cabourg11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg12.jpg')} alt='cabourg12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg13.jpg')} alt='cabourg13' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg14.jpg')} alt='cabourg14' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg15.jpg')} alt='cabourg15' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg16.jpg')} alt='cabourg16' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg17.jpg')} alt='cabourg17' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg18.jpg')} alt='cabourg18' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg19.jpg')} alt='cabourg19' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg20.jpg')} alt='cabourg20' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg21.jpg')} alt='cabourg21' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg22.jpg')} alt='cabourg22' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/cabourg/cabourg23.jpg')} alt='cabourg23' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cabourg