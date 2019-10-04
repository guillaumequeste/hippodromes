import React, { Component } from 'react'
import Header from './Header'

class Le_Croise_Laroche extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Le Croisé Laroche',
            image: 'le_croise.jpg',
            piste: 'herbe et cendrée',
            corde: 'gauche',
            circonference: '1 665 m',
            region: 'Hauts-de-France',
            departement: 'Nord',
            ville: 'Marcq-en-Baroeul',
            surnom: "hippodrome des Flandres"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/le_croise/le_croise.jpg')
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
                        <img src={require('../img/le_croise/le_croise2.jpg')} alt='le_croise2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise3.jpg')} alt='le_croise3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise4.jpg')} alt='le_croise4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise5.jpg')} alt='le_croise5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise6.jpg')} alt='le_croise6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise7.jpg')} alt='le_croise7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise8.jpg')} alt='le_croise8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise9.jpg')} alt='le_croise9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise10.jpg')} alt='le_croise10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise11.jpg')} alt='le_croise11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise12.jpg')} alt='le_croise12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise13.jpg')} alt='le_croise13' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise14.jpg')} alt='le_croise14' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise15.jpg')} alt='le_croise15' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise16.jpg')} alt='le_croise16' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/le_croise/le_croise17.jpg')} alt='le_croise17' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Le_Croise_Laroche