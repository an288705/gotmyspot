import { Button, Grid, TextField } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import SpotsSection from "../sections/SpotsSection";

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
          <Button>
            <SortIcon /> Sort
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
            <FilterAltIcon /> Filter
          </Button>
        </Grid>
      </Grid>
      <SpotsSection spots={res} />
    </LocalizationProvider>
  );
}
