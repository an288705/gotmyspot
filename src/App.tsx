import React from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";

function App() {
  const location = {
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div className="App">
      <div style={{ height: "50vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY || "" }}
          defaultCenter={location}
          defaultZoom={17}
        ></GoogleMapReact>
      </div>
    </div>
  );
}

export default App;
