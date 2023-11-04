import React from "react";
import { Grid, Paper } from "@mui/material";
import Map, { Marker } from "react-map-gl";
import Navbar from "./Navbar";
import SpotResSection from "./SpotResSection";

export default function Home() {
  const location = {
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item style={{ height: "50vh", width: "50%" }}>
          <Map
            mapboxAccessToken="pk.eyJ1IjoiYW4yODg3MDUiLCJhIjoiY2xvMmd3emlmMDdsZjJscGpmcHdrMTE5dyJ9.ecwGkQOZhDLyXtQJeSBsjw"
            initialViewState={{
              latitude: location.lat,
              longitude: location.lng,
              zoom: 15,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker
              latitude={location.lat}
              longitude={location.lng}
              onClick={() => {}}
            >
              <Paper>$20</Paper>
            </Marker>
            <Marker
              latitude={location.lat+.001}
              longitude={location.lng}
              onClick={() => {}}
            >
              <Paper>$20</Paper>
            </Marker>
          </Map>
        </Grid>
        <Grid item>
          <SpotResSection />
        </Grid>
      </Grid>
    </div>
  );
}
