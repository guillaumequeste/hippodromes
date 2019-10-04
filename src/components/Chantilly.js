import React, { Component } from 'react'
import Header from './Header'

class Chantilly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Chantilly',
            image: 'chantilly.jpg',
            piste: 'herbe et PSF',
            corde: 'droite',
            circonference: '2 000 m',
            region: 'Hauts-de-France',
            departement: 'Oise',
            ville: 'Chantilly',
            surnom: "hippodrome de Chantilly"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/chantilly/chantilly.jpg')
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
                        <img src={require('../img/chantilly/chantilly2.jpg')} alt='chantilly2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/chantilly/chantilly3.jpg')} alt='chantilly3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/chantilly/chantilly4.jpg')} alt='chantilly4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/chantilly/chantilly5.jpg')} alt='chantilly5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/chantilly/chantilly6.jpg')} alt='chantilly6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/chantilly/chantilly7.jpg')} alt='chantilly7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/chantilly/chantilly8.jpg')} alt='chantilly8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/chantilly/chantilly9.jpg')} alt='chantilly9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/chantilly/chantilly10.jpg')} alt='chantilly10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/chantilly/chantilly11.jpg')} alt='chantilly11' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chantilly