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
import ReserveSpotsSection from "../sections/ReserveSpotsSection";
import { getSpots } from "../../controllers/apis";

export default function SpotResSection() {
  const [spots, setSpots] = React.useState(Array<any>);

  async function setSpotsState() {
    const res = await getSpots();
    setSpots(res);
  }

  React.useEffect(() => {
    setSpotsState();
  }, []);
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
      <ReserveSpotsSection spots={spots} />
    </LocalizationProvider>
  );
}
