import React from "react";
import { Grid, Paper } from "../../libraries/gotmyspot-ui-library";
import Map, { Marker } from "react-map-gl";
import { CustomerContext } from "../../controllers/contexts";
import Navbar from "./Navbar";
import SpotResSection from "./SpotResSection";
import { setCustomerState } from "../../controllers/apis";

export default function CustomerHome() {
  const customer = React.useContext(CustomerContext);
  const [settings, setSettings] = React.useState<
    { text: string; href: string }[]
  >([{ text: "Sign In", href: "/sign-in" }]);

  async function setPageState() {
    const state = await setCustomerState(customer);
    setSettings(state!.settings);
  }

  React.useEffect(() => {
    setPageState();
  }, []);
  const location = {
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div>
      <Navbar settings={settings} />
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
    </div>
  );
}
