import React, { Component } from 'react'
import Header from './Header'

class Caen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Caen',
            image: 'caen.jpg',
            piste: 'sable',
            corde: 'droite',
            circonference: '1 954 m',
            region: 'Basse-Normandie',
            departement: 'Calvados',
            ville: 'Caen',
            surnom: "hippodrome de la Prairie"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/caen/caen.jpg')
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
                        <img src={require('../img/caen/caen2.jpg')} alt='caen2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/caen/caen3.jpg')} alt='caen3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/caen/caen4.jpg')} alt='caen4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/caen/caen5.jpg')} alt='caen5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/caen/caen6.jpg')} alt='caen6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/caen/caen7.jpg')} alt='caen7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/caen/caen8.jpg')} alt='caen8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/caen/caen9.jpg')} alt='caen9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/caen/caen10.jpg')} alt='caen10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/caen/caen11.jpg')} alt='caen11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/caen/caen12.jpg')} alt='caen12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/caen/caen13.jpg')} alt='caen13' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/caen/caen14.jpg')} alt='caen14' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/caen/caen15.jpg')} alt='caen15' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/caen/caen16.jpg')} alt='caen16' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/caen/caen17.jpg')} alt='caen17' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/caen/caen18.jpg')} alt='caen18' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/caen/caen19.jpg')} alt='caen19' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Caen