import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

function App() {
  const location = {
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div className="App">
      <div style={{ height: "50vh", width: "50%" }}>
        <Map
          mapboxAccessToken="pk.eyJ1IjoiYW4yODg3MDUiLCJhIjoiY2xvMmd3emlmMDdsZjJscGpmcHdrMTE5dyJ9.ecwGkQOZhDLyXtQJeSBsjw"
          initialViewState={{
            latitude: location.lat,
            longitude: location.lng,
            zoom: 15,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker latitude={location.lat} longitude={location.lng} />
        </Map>
      </div>
    </div>
  );
}

export default App;
