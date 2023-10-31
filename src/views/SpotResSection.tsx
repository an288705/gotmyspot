import React from "react";
import { TextField } from "@mui/material";
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
      Start
      <div>
        <DatePicker />
      </div>
      <div>
        <TimePicker />
      </div>
      End
      <div>
        <DatePicker />
      </div>
      <div>
        <TimePicker />
      </div>
      <div>
        {res.map((spotCard) => (
          <SpotCard name={spotCard} />
        ))}
      </div>
    </LocalizationProvider>
  );
}
