import React from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

function App() {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  return (
    <div className="App">
      hi
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={17}
      >
      </GoogleMapReact>
    </div>
  );
}

export default App;
