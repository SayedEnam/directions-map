import './App.css';
import React, {  useEffect } from 'react';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic3llZGVuYW0iLCJhIjoiY2w2Nnlqc2NvM2Z5bTNjbXBydm9jbjJldyJ9.0a1MGXkwIH-i9gISU1KIUQ';

function App() {


useEffect(() => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [90.374990, 22.700410],
    zoom: 13
    });
     
    map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'
    );
  });
  return (
    <div className="App">
        <div id='map' className="map-container" />
    </div>
  );
}

export default App;
