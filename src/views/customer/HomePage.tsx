import { Grid, Paper } from "../../libraries/gotmyspot-ui-library";
import Map, { Marker } from "react-map-gl";
import SpotResSection from "./SpotResSection";

export default function HomePage() {
  const location = {
    lat: 37.42216,
    lng: -122.08427,
  };

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
          <Marker
            latitude={location.lat}
            longitude={location.lng}
            onClick={() => {}}
          >
            <Paper>$20</Paper>
          </Marker>
          <Marker
            latitude={location.lat + 0.001}
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
  );
}
