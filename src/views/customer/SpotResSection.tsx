import React from "react";
import {
  LocalizationProvider,
  Button,
  Grid,
  TextField,
  Icons,
  DatePicker,
  TimePicker,
} from "../../libraries/gotmyspot-ui-library";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SpotsReserveSection from "../sections/SpotsReserveSection";

export default function SpotResSection(props: { spots: Array<any> }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      Location
      <div>
        <TextField id="outlined-basic" variant="outlined" onChange={() => {}} />
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
          <Button>
            <Icons.Sort /> Sort
          </Button>
        </Grid>
        <Grid item>
          End
          <div>
            <DatePicker />
          </div>
          <div>
            <TimePicker />
          </div>
          <Button>
            <Icons.FilterAlt /> Filter
          </Button>
        </Grid>
      </Grid>
      <SpotsReserveSection spots={props.spots} />
    </LocalizationProvider>
  );
}
