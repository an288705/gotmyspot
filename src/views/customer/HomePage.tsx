import React from "react";
import { Grid, Paper } from "../../libraries/gotmyspot-ui-library";
import Map, { Marker } from "react-map-gl";
import SpotsReserveSection from "../sections/SpotsReserveSection";
import SpotSearchSection from "./SpotSearchSection";
import { getSpotsByLatLong } from "../../controllers/apis";

export default function HomePage() {
  const [spots, setSpots] = React.useState(Array<any>);
  const [viewState, setViewState] = React.useState({
    longitude: -122.08427,
    latitude: 37.42216,
    zoom: 15,
  });

  async function setSpotsState() {
    const res = await getSpotsByLatLong(
      viewState.latitude,
      viewState.longitude,
      0.01,
    );

    console.log("res", res);
    setSpots(res);
  }

  function handleCenterMove(e: any) {
    setViewState({
      longitude: e.viewState.longitude,
      latitude: e.viewState.latitude,
      zoom: 15,
    });
  }

  React.useEffect(() => {
    setSpotsState();
  }, [viewState]);

  return (
    <Grid container>
      <Grid item style={{ height: "50vh", width: "50%" }}>
        <Map
          {...viewState}
          id="mapData"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          onMove={handleCenterMove}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          {spots.map((spot) => (
            <Marker
              latitude={spot.latitude}
              longitude={spot.longitude}
              onClick={() => {}}
            >
              <Paper>$20</Paper>
            </Marker>
          ))}
        </Map>
      </Grid>
      <Grid item>
        <SpotSearchSection setViewState={setViewState} />
        <SpotsReserveSection spots={spots} />
      </Grid>
    </Grid>
  );
}
