import React from "react";
import { Grid, Paper } from "../../libraries/gotmyspot-ui-library";
import Map, { Marker } from "react-map-gl";
import SpotsReserveSection from "../sections/SpotsReserveSection";
import SpotSearchSection from "./SpotSearchSection";
import { getSpotsByLatLong } from "../../controllers/apis";

export default function HomePage() {
  /* MAP COMPONENT NEEDS TO CHANGE TO UPDATE CENTER ON SEARCH */
  const [spots, setSpots] = React.useState(Array<any>);
  const [rawLocation, setRawLocation] = React.useState<string>(
    "1600 Amphitheatre Parkway Mountain View CA 94043",
  );
  const [location, setLocation] = React.useState<{
    lat: number;
    lng: number;
  }>({
    lat: 37.42216,
    lng: -122.08427,
  });

  async function setSpotsState() {
    const address = encodeURIComponent(rawLocation);
    console.log(address);
    const geocoding = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`,
    ).then((data) => data.json());
    console.log("geo res: ", geocoding);
    console.log(
      "lat long: ",
      geocoding.features[0].center[1],
      geocoding.features[0].center[0],
    );
    setLocation({
      lat: geocoding.features[0].center[1],
      lng: geocoding.features[0].center[0],
    });
    const res = await getSpotsByLatLong(
      geocoding.features[0].center[1],
      geocoding.features[0].center[0],
      0.01,
    );
    setSpots(res);
    console.log("res", res);
  }

  function handleCenterMove(e: any) {
    setLocation({ lat: e.viewState.latitude, lng: e.viewState.longitude });
  }

  React.useEffect(() => {
    console.log("curr raw:", rawLocation);
    setSpotsState();
  }, [rawLocation]);

  return (
    <Grid container>
      <Grid item style={{ height: "50vh", width: "50%" }}>
        <Map
          id="mapData"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            latitude: location.lat,
            longitude: location.lng,
            zoom: 15,
          }}
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
        <SpotSearchSection setRawLocation={setRawLocation} />
        <SpotsReserveSection spots={spots} />
      </Grid>
    </Grid>
  );
}
