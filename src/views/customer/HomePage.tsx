import React from "react";
import { Grid, Paper } from "../../libraries/gotmyspot-ui-library";
import Map, { Marker } from "react-map-gl";
import SpotsReserveSection from "../sections/SpotsReserveSection";
import SpotSearchSection from "../sections/SpotSearchSection";
import { getSpotsByLatLong } from "../../controllers/apis";
import Spot from "../../models/interfaces/Spot";

export default function HomePage() {
  const [spots, setSpots] = React.useState(Array<Spot>);
  const [viewState, setViewState] = React.useState<{
    longitude: number;
    latitude: number;
    zoom: number;
  }>();
  const [startDate, setStartDate] = React.useState<Date>(new Date());
  const [endDate, setEndDate] = React.useState<Date>(new Date());

  async function setSpotsState() {
    if (viewState) {
      const res = await getSpotsByLatLong(
        viewState.latitude,
        viewState.longitude,
        startDate,
        endDate,
        0.01,
      );

      console.log("res", res);
      setSpots(res);
    }
  }

  React.useEffect(() => {
    setSpotsState();
  }, [viewState]);

  return (
    <Grid container>
      {viewState && (
        <Grid item style={{ height: "50vh", width: "50%" }}>
          <Map
            {...viewState}
            id="mapData"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            onMove={(e) =>
              setViewState({
                longitude: e.viewState.longitude,
                latitude: e.viewState.latitude,
                zoom: 15,
              })
            }
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
      )}
      <Grid item>
        <SpotSearchSection
          setViewState={setViewState}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <SpotsReserveSection spots={spots} />
      </Grid>
    </Grid>
  );
}
