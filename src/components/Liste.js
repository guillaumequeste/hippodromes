import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

class Liste extends Component {
    
    render () {
        return (
            <div>
                <Header />
                <div className="bodyListe">
                    <div className="liste">
                        <p><Link to="/Abbeville" className="linkListe">Abbeville</Link></p>
                        <p><Link to="/Amiens" className="linkListe">Amiens</Link></p>
                        <p><Link to="/Angers" className="linkListe">Angers</Link></p>
                        <p><Link to="/Argentan" className="linkListe">Argentan</Link></p>
                        <p><Link to="/Auteuil" className="linkListe">Auteuil</Link></p>
                        <p><Link to="/Bacqueville_en_Caux" className="linkListe">Bacqueville en Caux</Link></p>
                        <p><Link to="/Bernay" className="linkListe">Bernay</Link></p>
                        <p><Link to="/Bihorel" className="linkListe">Bihorel</Link></p>
                        <p><Link to="/Cabourg" className="linkListe">Cabourg</Link></p>
                        <p><Link to="/Caen" className="linkListe">Caen</Link></p>
                        <p><Link to="/Chantilly" className="linkListe">Chantilly</Link></p>
                        <p><Link to="/Chartres" className="linkListe">Chartres</Link></p>
                        <p><Link to="/Cholet" className="linkListe">Cholet</Link></p>
                        <p><Link to="/Clairefontaine" className="linkListe">Clairefontaine</Link></p>
                        <p><Link to="/Compiegne" className="linkListe">Compiegne</Link></p>
                        <p><Link to="/Craon" className="linkListe">Craon</Link></p>
                        <p><Link to="/Deauville" className="linkListe">Deauville</Link></p>
                        <p><Link to="/Dieppe" className="linkListe">Dieppe</Link></p>
                        <p><Link to="/Dozule" className="linkListe">Dozule</Link></p>
                        <p><Link to="/Enghien" className="linkListe">Enghien</Link></p>
                        <p><Link to="/Evreux" className="linkListe">Evreux</Link></p>
                        <p><Link to="/Fontainebleau" className="linkListe">Fontainebleau</Link></p>
                        <p><Link to="/Gournay_en_Bray" className="linkListe">Gournay en Bray</Link></p>
                        <p><Link to="/Graignes" className="linkListe">Graignes</Link></p>
                        <p><Link to="/La_Capelle" className="linkListe">La Capelle</Link></p>
                        <p><Link to="/La_Ferte_Vidame" className="linkListe">La Ferté Vidame</Link></p>
                        <p><Link to="/Laval" className="linkListe">Laval</Link></p>
                        <p><Link to="/Le_Croise_Laroche" className="linkListe">Le Croisé Laroche</Link></p>
                        <p><Link to="/Le_Lion_d_Angers" className="linkListe">Le Lion d'Angers</Link></p>
                        <p><Link to="/Le_Mont_Saint_Michel" className="linkListe">Le Mont-Saint-Michel</Link></p>
                        <p><Link to="/Le_Neubourg" className="linkListe">Le Neubourg</Link></p>
                        <p><Link to="/Le_Touquet" className="linkListe">Le Touquet</Link></p>
                        <p><Link to="/Lisieux" className="linkListe">Lisieux</Link></p>
                        <p><Link to="/Longchamp" className="linkListe">Longchamp</Link></p>
                        <p><Link to="/Maisons_Laffitte" className="linkListe">Maisons-Laffitte</Link></p>
                        <p><Link to="/Mauquenchy" className="linkListe">Mauquenchy</Link></p>
                        <p><Link to="/Maure_de_Bretagne" className="linkListe">Maure de Bretagne</Link></p>
                        <p><Link to="/Meslay_du_Maine" className="linkListe">Meslay du Maine</Link></p>
                        <p><Link to="/Mons" className="linkListe">Mons</Link></p>
                        <p><Link to="/Nantes" className="linkListe">Nantes</Link></p>
                        <p><Link to="/Ranes" className="linkListe">Rânes</Link></p>
                        <p><Link to="/Reims" className="linkListe">Reims</Link></p>
                        <p><Link to="/Saint_Aubin_les_Elbeuf" className="linkListe">Saint-Aubin-lès-Elbeuf</Link></p>
                        <p><Link to="/Saint_Cloud" className="linkListe">Saint-Cloud</Link></p>
                        <p><Link to="/Saint_Malo" className="linkListe">Saint-Malo</Link></p>
                        <p><Link to="/Saint_Omer" className="linkListe">Saint-Omer</Link></p>
                        <p><Link to="/saint-pierre-sur-dives" className="linkListe">Saint-Pierre-sur-Dives</Link></p>
                        <p><Link to="/Strasbourg" className="linkListe">Strasbourg</Link></p>
                        <p><Link to="/Vincennes" className="linkListe">Vincennes</Link></p>
                        <p><Link to="/Vire" className="linkListe">Vire</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Liste