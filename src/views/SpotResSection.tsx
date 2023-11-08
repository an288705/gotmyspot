import { Grid, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import SpotCard from "./SpotCard";

export default function SpotResSection() {
  const res = ["ex 1", "ex 2", "ex 3"];
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
      <div>
        {res.map((spotCardInfo) => (
          <SpotCard spotCardInfo={spotCardInfo} />
        ))}
      </div>
    </LocalizationProvider>
  );
}
