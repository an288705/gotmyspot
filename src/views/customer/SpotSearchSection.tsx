import React from "react";
import {
  LocalizationProvider,
  Box,
  Button,
  Grid,
  DatePicker,
  TimePicker,
  TextField,
} from "../../libraries/gotmyspot-ui-library";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function SpotSearchSection(props: { setViewState: any }) {
  async function handleSpotSearch(e: any) {
    e.preventDefault();
    console.log("e val", e);
    const formData = new FormData(e.currentTarget);
    console.log("location search val", formData.get("location"));

    const rawLocation = String(formData.get("location"));
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

    props.setViewState({
      longitude: geocoding.features[0].center[0],
      latitude: geocoding.features[0].center[1],
      zoom: 15,
    });
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        noValidate
        onSubmit={handleSpotSearch}
        sx={{ mt: 3 }}
      >
        Location
        <div>
          <TextField
            id="location"
            name="location"
            variant="outlined"
            defaultValue={"1600 Amphitheatre Parkway Mountain View CA 94043"}
          />
        </div>
        <Grid container>
          <Grid item>
            Start
            <div>
              <DatePicker />
            </div>
            <div>
              <TimePicker />
            </div>
          </Grid>
          <Grid item>
            End
            <div>
              <DatePicker />
            </div>
            <div>
              <TimePicker />
            </div>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Search
        </Button>
      </Box>
    </LocalizationProvider>
  );
}
