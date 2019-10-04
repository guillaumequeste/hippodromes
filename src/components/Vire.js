import React, { Component } from 'react'
import Header from './Header'

class Vire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Vire',
            image: 'vire.jpg',
            piste: 'herbe et sable',
            corde: 'droite',
            circonference: '1 425 m',
            region: 'Basse-Normandie',
            departement: 'Calvados',
            ville: 'Vire',
            surnom: "hippodrome Robert-Auvray"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/vire/vire.jpg')
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
                        <img src={require('../img/vire/vire2.jpg')} alt='vire2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire3.jpg')} alt='vire3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire4.jpg')} alt='vire4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire5.jpg')} alt='vire5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire6.jpg')} alt='vire6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire7.jpg')} alt='vire7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire8.jpg')} alt='vire8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire9.jpg')} alt='vire9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire10.jpg')} alt='vire10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire11.jpg')} alt='vire11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire12.jpg')} alt='vire12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire13.jpg')} alt='vire13' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire14.jpg')} alt='vire14' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire15.jpg')} alt='vire15' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire16.jpg')} alt='vire16' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire17.jpg')} alt='vire17' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire18.jpg')} alt='vire18' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire19.jpg')} alt='vire19' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire20.jpg')} alt='vire20' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire21.jpg')} alt='vire21' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire22.jpg')} alt='vire22' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire23.jpg')} alt='vire23' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/vire/vire24.jpg')} alt='vire24' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/vire/vire25.jpg')} alt='vire25' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vire