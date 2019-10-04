import Leaflet from 'leaflet'
import React, { Component } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import Carte from './components/Carte'
import Header from './components/Header'

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'


class App extends Component {
  render() {
    return (
      <div className="bodyApp">
        <Header />
        <Carte />
      </div>
    );
  }
}

export default App;