import React, { Component } from 'react'
import Header from './Header'

class La_Ferte_Vidame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'La Ferté-Vidame',
            image: 'la_ferte-vidame01.jpg',
            piste: 'herbe',
            corde: 'gauche',
            circonference: '1 025 m',
            region: 'Centre-Val de Loire',
            departement: 'Eure-et-Loir',
            ville: 'La Ferté-Vidame',
            surnom: "hippodrome de Pipe-Souris"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/la_ferte-vidame/la_ferte-vidame01.jpg')
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
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame02.jpg')} alt='la_ferte-vidame02' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame03.jpg')} alt='la_ferte-vidame03' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame04.jpg')} alt='la_ferte-vidame04' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame05.jpg')} alt='la_ferte-vidame05' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame06.jpg')} alt='la_ferte-vidame06' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame07.jpg')} alt='la_ferte-vidame07' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame08.jpg')} alt='la_ferte-vidame08' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame09.jpg')} alt='la_ferte-vidame09' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame10.jpg')} alt='la_ferte-vidame10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame11.jpg')} alt='la_ferte-vidame11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/la_ferte-vidame/la_ferte-vidame12.jpg')} alt='la_ferte-vidame12' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default La_Ferte_Vidame