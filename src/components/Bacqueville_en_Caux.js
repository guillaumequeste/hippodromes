import React, { Component } from 'react'
import Header from './Header'

class Bacqueville_en_Caux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Bacqueville-en-Caux',
            image: 'bacqueville.jpg',
            piste: 'herbe',
            corde: 'gauche',
            circonference: '950 m',
            region: 'Haute-Normandie',
            departement: 'Seine-maritime',
            ville: 'Bacqueville-en-Caux',
            surnom: "hippodrome de Pierreville"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/bacqueville/bacqueville.jpg')
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
                        <img src={require('../img/bacqueville/bacqueville2.jpg')} alt='bacqueville2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville3.jpg')} alt='bacqueville3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville4.jpg')} alt='bacqueville4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville5.jpg')} alt='bacqueville5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville6.jpg')} alt='bacqueville6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville7.jpg')} alt='bacqueville7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville8.jpg')} alt='bacqueville8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville9.jpg')} alt='bacqueville9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville10.jpg')} alt='bacqueville10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville11.jpg')} alt='bacqueville11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville12.jpg')} alt='bacqueville12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville13.jpg')} alt='bacqueville13' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville14.jpg')} alt='bacqueville14' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville15.jpg')} alt='bacqueville15' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville16.jpg')} alt='bacqueville16' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville17.jpg')} alt='bacqueville17' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville18.jpg')} alt='bacqueville18' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/bacqueville/bacqueville19.jpg')} alt='bacqueville19' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bacqueville_en_Caux