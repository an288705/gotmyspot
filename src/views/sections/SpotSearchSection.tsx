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
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { handleSpotSearch } from "../../controllers/apis";

export default function SpotSearchSection(props: {
  setViewState: React.Dispatch<
    React.SetStateAction<
      | {
          longitude: number;
          latitude: number;
          zoom: number;
        }
      | undefined
    >
  >;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}) {
  const minutesToMilliseconds = 1000 * 60;
  const [startDay, setStartDay] = React.useState<Date>(new Date());
  const [startTime, setStartTime] = React.useState<Date>(
    new Date(
      Math.ceil(new Date().getTime() / (30 * minutesToMilliseconds)) *
        30 *
        minutesToMilliseconds,
    ),
  );
  const [endDay, setEndDay] = React.useState<Date>(new Date());
  const [endTime, setEndTime] = React.useState<Date>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        noValidate
        onSubmit={(event) =>
          handleSpotSearch(
            event,
            startDay,
            startTime,
            endDay,
            endTime,
            props.setViewState,
            props.setStartDate,
            props.setEndDate,
          )
        }
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
              <DatePicker
                value={dayjs(startDay)}
                onChange={(date: any) => setStartDay(new Date(date))}
              />
            </div>
            <div>
              <TimePicker
                value={dayjs(startTime)}
                onChange={(time: any) => setStartTime(new Date(time))}
              />
            </div>
          </Grid>
          <Grid item>
            End
            <div>
              <DatePicker onChange={(date: any) => setEndDay(new Date(date))} />
            </div>
            <div>
              <TimePicker
                onChange={(time: any) => setEndTime(new Date(time))}
              />
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
