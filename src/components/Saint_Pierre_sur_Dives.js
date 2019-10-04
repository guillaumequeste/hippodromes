import React, { Component } from 'react'
import Header from './Header'

class Saint_Pierre_sur_Dives extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Saint-Pierre-sur-Dives',
            image: 'saint-pierre-sur-dives.jpg',
            piste: 'herbe',
            corde: 'droite',
            circonference: '1 000 m',
            region: 'Basse-Normandie',
            departement: 'Calvados',
            ville: 'Caen - Lisieux',
            surnom: "hippodrome de Saint-Pierre-sur-Dives"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives.jpg')
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
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives2.jpg')} alt='saint-pierre-sur-dives2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives3.jpg')} alt='saint-pierre-sur-dives3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives4.jpg')} alt='saint-pierre-sur-dives4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives5.jpg')} alt='saint-pierre-sur-dives5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives6.jpg')} alt='saint-pierre-sur-dives6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives7.jpg')} alt='saint-pierre-sur-dives7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives8.jpg')} alt='saint-pierre-sur-dives8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives9.jpg')} alt='saint-pierre-sur-dives9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives10.jpg')} alt='saint-pierre-sur-dives10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives11.jpg')} alt='saint-pierre-sur-dives11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives12.jpg')} alt='saint-pierre-sur-dives12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives13.jpg')} alt='saint-pierre-sur-dives13' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives14.jpg')} alt='saint-pierre-sur-dives14' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives15.jpg')} alt='saint-pierre-sur-dives15' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives16.jpg')} alt='saint-pierre-sur-dives16' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives17.jpg')} alt='saint-pierre-sur-dives17' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives18.jpg')} alt='saint-pierre-sur-dives18' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/saint-pierre-sur-dives/saint-pierre-sur-dives19.jpg')} alt='saint-pierre-sur-dives19' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Saint_Pierre_sur_Dives