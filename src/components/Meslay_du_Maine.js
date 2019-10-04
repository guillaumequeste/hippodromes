import React, { Component } from 'react'
import Header from './Header'

class Meslay_du_Maine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Meslay-du-Maine',
            image: 'meslay.jpg',
            piste: 'herbe et cendrée',
            corde: 'droite',
            circonference: '1 750 m',
            region: 'Pays de la Loire',
            departement: 'Mayenne',
            ville: 'Meslay-du-Maine',
            surnom: "hippodrome de la Bretonnière"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/meslay/meslay.jpg')
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
                        <img src={require('../img/meslay/meslay2.jpg')} alt='meslay2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/meslay/meslay3.jpg')} alt='meslay3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/meslay/meslay4.jpg')} alt='meslay4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/meslay/meslay5.jpg')} alt='meslay5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/meslay/meslay6.jpg')} alt='meslay6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/meslay/meslay7.jpg')} alt='meslay7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/meslay/meslay8.jpg')} alt='meslay8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/meslay/meslay9.jpg')} alt='meslay9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/meslay/meslay10.jpg')} alt='meslay10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/meslay/meslay11.jpg')} alt='meslay11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/meslay/meslay12.jpg')} alt='meslay12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/meslay/meslay13.jpg')} alt='meslay13' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/meslay/meslay14.jpg')} alt='meslay14' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/meslay/meslay15.jpg')} alt='meslay15' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meslay_du_Maine