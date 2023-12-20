import React from "react";
import { Grid, Paper } from "../../libraries/gotmyspot-ui-library";
import Map, { Marker } from "react-map-gl";
import SpotResSection from "./SpotResSection";
import { getSpotsByLatLong } from "../../controllers/apis";

export default function HomePage() {
  const [spots, setSpots] = React.useState(Array<any>);
  const location = {
    lat: 37.42216,
    lng: -122.08427,
  };

  async function setSpotsState() {
    const res = await getSpotsByLatLong(location.lat, location.lng, 5);
    setSpots(res);
    console.log("res", res);
  }

  React.useEffect(() => {
    setSpotsState();
  }, []);

  return (
    <Grid container>
      <Grid item style={{ height: "50vh", width: "50%" }}>
        <Map
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            latitude: location.lat,
            longitude: location.lng,
            zoom: 15,
          }}
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
        <SpotResSection spots={spots} />
      </Grid>
    </Grid>
  );
}
