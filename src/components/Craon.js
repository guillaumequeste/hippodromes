import React, { Component } from 'react'
import Header from './Header'

class Craon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Craon',
            image: 'craon.jpg',
            piste: 'herbe',
            corde: 'droite',
            circonference: '2 000 m',
            region: 'Pays de la Loire',
            departement: 'Mayenne',
            ville: 'Craon',
            surnom: "hippodrome de la Touche"
        }
      }
    render () {
        const requireImage = () => {
            try {
                return require('../img/craon/craon.jpg')
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
                        <img src={require('../img/craon/craon2.jpg')} alt='craon2' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon3.jpg')} alt='craon3' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon4.jpg')} alt='craon4' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon5.jpg')} alt='craon5' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon6.jpg')} alt='craon6' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon7.jpg')} alt='craon7' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon8.jpg')} alt='craon8' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon9.jpg')} alt='craon9' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon10.jpg')} alt='craon10' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon11.jpg')} alt='craon11' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon12.jpg')} alt='craon12' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon13.jpg')} alt='craon13' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon14.jpg')} alt='craon14' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon15.jpg')} alt='craon15' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon16.jpg')} alt='craon16' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon17.jpg')} alt='craon17' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon18.jpg')} alt='craon18' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon19.jpg')} alt='craon19' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon20.jpg')} alt='craon20' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon21.jpg')} alt='craon21' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon22.jpg')} alt='craon22' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon23.jpg')} alt='craon23' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon24.jpg')} alt='craon24' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon25.jpg')} alt='craon25' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon26.jpg')} alt='craon26' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon27.jpg')} alt='craon27' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon28.jpg')} alt='craon28' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon29.jpg')} alt='craon29' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon30.jpg')} alt='craon30' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon31.jpg')} alt='craon31' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon32.jpg')} alt='craon32' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon33.jpg')} alt='craon33' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon34.jpg')} alt='craon34' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon35.jpg')} alt='craon35' className="tailleImagePlus"/>
                    </div>
                </div>
                <div className="plusDePhotos">
                    <div className="image">
                        <img src={require('../img/craon/craon36.jpg')} alt='craon36' className="tailleImagePlus"/>
                    </div>
                    <div className="image">
                        <img src={require('../img/craon/craon37.jpg')} alt='craon37' className="tailleImagePlus"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Craon