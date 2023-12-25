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
import { handleSpotSearch } from "../../controllers/apis";

export default function SpotSearchSection(props: { setViewState: any }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        noValidate
        onSubmit={(event) => handleSpotSearch(event, props.setViewState)}
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
