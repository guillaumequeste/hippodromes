import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Abbeville from './components/Abbeville'
import Amiens from './components/Amiens'
import Angers from './components/Angers'
import Argentan from './components/Argentan'
import Auteuil from './components/Auteuil'
import Bacqueville_en_Caux from './components/Bacqueville_en_Caux'
import Bernay from './components/Bernay'
import Bihorel from './components/Bihorel'
import Cabourg from './components/Cabourg'
import Caen from './components/Caen'
import Chantilly from './components/Chantilly'
import Chartres from './components/Chartres'
import Cholet from './components/Cholet'
import Clairefontaine from './components/Clairefontaine'
import Compiegne from './components/Compiegne'
import Contact from './components/Contact'
import Craon from './components/Craon'
import Deauville from './components/Deauville'
import Dieppe from './components/Dieppe'
import Dozule from './components/Dozule'
import Enghien from './components/Enghien'
import Evreux from './components/Evreux'
import Fontainebleau from './components/Fontainebleau'
import Gournay_en_Bray from './components/Gournay_en_Bray'
import Graignes from './components/Graignes'
import La_Capelle from './components/La_Capelle'
import Laval from './components/Laval'
import Le_Croise_Laroche from './components/Le_Croise_Laroche'
import Le_Lion_d_Angers from './components/Le_Lion_d_Angers'
import Le_Mont_Saint_Michel from './components/Le_Mont_Saint_Michel'
import Le_Neubourg from './components/Le_Neubourg'
import Le_Touquet from './components/Le_Touquet'
import Lisieux from './components/Lisieux'
import Longchamp from './components/Longchamp'
import Maisons_Laffitte from './components/Maisons_Laffitte'
import Mauquenchy from './components/Mauquenchy'
import Maure_de_Bretagne from './components/Maure_de_Bretagne'
import Meslay_du_Maine from './components/Meslay_du_Maine'
import Mons from './components/Mons'
import Nantes from './components/Nantes'
import NotFound from './components/NotFound'
import Ranes from './components/Ranes'
import Reims from './components/Reims'
import Saint_Aubin_les_Elbeuf from './components/Saint_Aubin_les_Elbeuf'
import Saint_Cloud from './components/Saint_Cloud'
import Saint_Malo from './components/Saint_Malo'
import Saint_Omer from './components/Saint_Omer'
import Saint_Pierre_sur_Dives from './components/Saint_Pierre_sur_Dives'
import Strasbourg from './components/Strasbourg'
import Vincennes from './components/Vincennes'
import Vire from './components/Vire'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/contact' component={Contact}/>
            <Route path='/abbeville' component={Abbeville}/>
            <Route path='/amiens' component={Amiens}/>
            <Route path='/angers' component={Angers}/>
            <Route path='/argentan' component={Argentan}/>
            <Route path='/auteuil' component={Auteuil}/>
            <Route path='/bacqueville_en_caux' component={Bacqueville_en_Caux}/>
            <Route path='/bernay' component={Bernay}/>
            <Route path='/bihorel' component={Bihorel}/>
            <Route path='/cabourg' component={Cabourg}/>
            <Route path='/caen' component={Caen}/>
            <Route path='/chantilly' component={Chantilly}/>
            <Route path='/chartres' component={Chartres}/>
            <Route path='/cholet' component={Cholet}/>
            <Route path='/clairefontaine' component={Clairefontaine}/>
            <Route path='/compiegne' component={Compiegne}/>
            <Route path='/craon' component={Craon}/>
            <Route path='/deauville' component={Deauville}/>
            <Route path='/dieppe' component={Dieppe}/>
            <Route path='/dozule' component={Dozule}/>
            <Route path='/enghien' component={Enghien}/>
            <Route path='/evreux' component={Evreux}/>
            <Route path='/fontainebleau' component={Fontainebleau}/>
            <Route path='/gournay_en_bray' component={Gournay_en_Bray}/>
            <Route path='/graignes' component={Graignes}/>
            <Route path='/la_capelle' component={La_Capelle}/>
            <Route path='/laval' component={Laval}/>
            <Route path='/le_croise_laroche' component={Le_Croise_Laroche}/>
            <Route path='/le_lion_d_angers' component={Le_Lion_d_Angers}/>
            <Route path='/le_mont_saint_michel' component={Le_Mont_Saint_Michel}/>
            <Route path='/le_neubourg' component={Le_Neubourg}/>
            <Route path='/le_touquet' component={Le_Touquet}/>
            <Route path='/lisieux' component={Lisieux}/>
            <Route path='/longchamp' component={Longchamp}/>
            <Route path='/maisons_laffitte' component={Maisons_Laffitte}/>
            <Route path='/mauquenchy' component={Mauquenchy}/>
            <Route path='/maure_de_bretagne' component={Maure_de_Bretagne}/>
            <Route path='/meslay_du_maine' component={Meslay_du_Maine}/>
            <Route path='/mons' component={Mons}/>
            <Route path='/nantes' component={Nantes}/>
            <Route path='/ranes' component={Ranes}/>
            <Route path='/reims' component={Reims}/>
            <Route path='/saint_aubin_les_elbeuf' component={Saint_Aubin_les_Elbeuf}/>
            <Route path='/saint-cloud' component={Saint_Cloud}/>
            <Route path='/saint-malo' component={Saint_Malo}/>
            <Route path='/saint-omer' component={Saint_Omer}/>
            <Route path='/saint-pierre-sur-dives' component={Saint_Pierre_sur_Dives}/>
            <Route path='/strasbourg' component={Strasbourg}/>
            <Route path='/vincennes' component={Vincennes}/>
            <Route path='/vire' component={Vire}/>

            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
