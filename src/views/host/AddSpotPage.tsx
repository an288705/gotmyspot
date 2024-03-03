import * as React from "react";
import {
  LocalizationProvider,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Modal,
  Fade,
  DatePicker,
  TimePicker,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Fab,
  Checkbox,
  Avatar,
} from "../../libraries/gotmyspot-ui-library";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CopyrightSection from "../sections/CopyrightSection";
import { handleAddSpot } from "../../controllers/apis";
import Spot from "../../models/interfaces/Spot";
import Period from "../../models/interfaces/Period";
import Rate from "../../models/interfaces/Rate";
import { grey } from "@mui/material/colors";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function HostSignUp() {
  // TODO: check if supabase parses JSON objects
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [daysMarked, setDaysMarked] = React.useState<
    Array<[string, boolean, number]>
  >([
    ["M", false, 0],
    ["T", false, 0],
    ["W", false, 0],
    ["T", false, 0],
    ["F", false, 0],
    ["S", false, 0],
    ["S", false, 0],
  ]);
  const [spotForm, setSpotForm] = React.useState<Array<Spot>>([{} as Spot]);
  const [spotFormCount, setSpotFormCount] = React.useState<Array<number>>([0]);
  const [availabilityCount, setAvailabilityCount] = React.useState<
    Array<number>
  >([0]);
  const [rateCount, setRateCount] = React.useState<Array<number>>([0]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={defaultTheme}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openModal}
          onClose={() => setOpenModal(false)}
          closeAfterTransition
        >
          <Fade in={openModal}>
            <Box sx={style}>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Your request has been received, we will reach out to you
                regarding your application. You can learn about hosting on our
                seller's page
              </Typography>
            </Box>
          </Fade>
        </Modal>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={(event) => handleAddSpot(spotForm, event)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {spotFormCount.map((count) => (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id={"spotAddress" + String(count)}
                        label="Spot Address"
                        name={"spotAddress" + String(count)}
                        autoComplete={"spotAddress" + String(count)}
                        onChange={(event) =>
                          setSpotForm((prev) => {
                            let temp = prev;
                            console.log(temp);
                            temp[count].address = event.target.value;
                            return temp;
                          })
                        }
                      />
                      <TextField
                        required
                        fullWidth
                        id={"details" + String(count)}
                        label="Details"
                        name={"details" + String(count)}
                        autoComplete={"details" + String(count)}
                        onChange={(event) =>
                          setSpotForm((prev) => {
                            let temp = prev;
                            temp[count].details = event.target.value;
                            return temp;
                          })
                        }
                      />
                    </Grid>
                    {availabilityCount.map((timeCount) => (
                      <>
                        <Grid item>
                          Days
                          <div>
                            {daysMarked.map(([day, isMarked, count], index) => (
                              <Checkbox
                                icon={
                                  <Avatar
                                    sx={{
                                      backgroundColor: "lightgray",
                                      border: `1px solid`,
                                      color: "black",
                                    }}
                                  >
                                    {day}
                                  </Avatar>
                                }
                                checkedIcon={
                                  daysMarked[index][2] == timeCount ? (
                                    <Avatar
                                      sx={{
                                        backgroundColor: "gray",
                                        border: `1px solid`,
                                        color: "black",
                                      }}
                                    >
                                      {day}
                                    </Avatar>
                                  ) : (
                                    <Avatar
                                      sx={{
                                        backgroundColor: "white",
                                        border: `1px solid`,
                                        color: "white",
                                      }}
                                    >
                                      {day}
                                    </Avatar>
                                  )
                                }
                                checked={isMarked}
                                onChange={() => {
                                  setDaysMarked((daysMarked) => {
                                    let temp = JSON.parse(
                                      JSON.stringify(daysMarked),
                                    );
                                    temp[index] = [
                                      daysMarked[index][0],
                                      !isMarked,
                                      timeCount,
                                    ];
                                    console.log(temp);
                                    return temp;
                                  });

                                  setSpotForm((prev) => {
                                    let temp = prev;
                                  if (temp[count].availability === undefined) {
                                    temp[count].availability = [{} as Period];
                                  }
                                  

                                  let days:string = ''
                                  daysMarked.map(([string,isMarked,index])=>{
                                    if(isMarked && timeCount==index) {
                                      days+=string;
                                    }
                                  })
                                  
                                  temp[count].availability[timeCount].days = days;
                                  temp[count].availability[timeCount].type =
                                    "schedule";
                                  return temp;
                                  })
                                }
                                  
                                }
                              />
                            ))}
                          </div>
                        </Grid>
                        <Grid item>
                          Open time
                          <div>
                            <TimePicker
                              onChange={(time: any) =>
                                setSpotForm((prev) => {
                                  const sanitizedTime = new Date(time);
                                  let temp = prev;
                                  const timeString =
                                    sanitizedTime.getHours() +
                                    ":" +
                                    sanitizedTime.getMinutes() +
                                    ":00";

                                  if (temp[count].availability === undefined) {
                                    temp[count].availability = [{} as Period];
                                  }
                                  temp[count].availability[
                                    timeCount
                                  ].startTime = timeString;
                                  temp[count].availability[timeCount].type =
                                    "schedule";
                                  return temp;
                                })
                              }
                            />
                          </div>
                          Close time
                          <div>
                            <TimePicker
                              onChange={(time: any) =>
                                setSpotForm((prev) => {
                                  const sanitizedTime = new Date(time);
                                  let temp = prev;
                                  const timeString =
                                    sanitizedTime.getHours() +
                                    ":" +
                                    sanitizedTime.getMinutes() +
                                    ":00";

                                  if (temp[count].availability === undefined) {
                                    temp[count].availability = [{} as Period];
                                  }
                                  temp[count].availability[timeCount].endTime =
                                    timeString;
                                  temp[count].availability[timeCount].type =
                                    "schedule";
                                  return temp;
                                })
                              }
                            />
                          </div>
                        </Grid>
                      </>
                    ))}
                    {
                      <>
                        <Table className={"spotRate" + count}>
                          <TableHead>
                            <TableRow>
                              <TableCell>Rate</TableCell>
                              <TableCell align="right"></TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rateCount.map((rateCount) => (
                              <>
                                <TableRow key={1}>
                                  <TableCell align="right">
                                    <TextField
                                      required
                                      fullWidth
                                      id={"Cost" + String(rateCount)}
                                      label="Cost"
                                      name={"Cost" + String(rateCount)}
                                      autoComplete={"Cost" + String(rateCount)}
                                      onChange={(event) =>
                                        setSpotForm((prev) => {
                                          let temp = prev;
                                          if (temp[count].rates === undefined) {
                                            temp[count].rates = [{} as Rate];
                                          }
                                          console.log(temp);
                                          temp[count].rates[rateCount].cost =
                                            Number(event.target.value);
                                          return temp;
                                        })
                                      }
                                    />
                                  </TableCell>
                                  <TableCell align="right">
                                    <TextField
                                      required
                                      fullWidth
                                      id={"Length" + String(rateCount)}
                                      label="Length"
                                      name={"Length" + String(rateCount)}
                                      autoComplete={
                                        "Length" + String(rateCount)
                                      }
                                      onChange={(event) =>
                                        setSpotForm((prev) => {
                                          let temp = prev;
                                          if (temp[count].rates === undefined) {
                                            temp[count].rates = [{} as Rate];
                                          }
                                          temp[count].rates[
                                            rateCount
                                          ].lengthInSeconds = Number(
                                            event.target.value,
                                          );
                                          return temp;
                                        })
                                      }
                                    />
                                  </TableCell>
                                </TableRow>
                              </>
                            ))}
                          </TableBody>
                        </Table>
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          onClick={() => {
                            setRateCount((prev) => [...prev, prev.length + 1]);
                            setSpotForm((prev) => {
                              let temp = prev;
                              if (temp[count].rates === undefined) {
                                temp[count].rates = [{} as Rate];
                              }
                              temp[count].rates.push({} as Rate);
                              return temp;
                            });
                          }}
                        >
                          Add another rate
                        </Button>
                      </>
                    }
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={() => {
                        setAvailabilityCount((prev) => [
                          ...prev,
                          prev.length + 1,
                        ]);
                        setSpotForm((prev) => {
                          let temp = prev;
                          if (temp[count].availability === undefined) {
                            temp[count].availability = [{} as Period];
                          }
                          temp[count].availability.push({} as Period);
                          return temp;
                        });
                      }}
                    >
                      Add another time slot
                    </Button>
                  </>
                ))}
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    setSpotFormCount((prev) => [...prev, prev.length + 1]);
                    setSpotForm((prev) => [...prev, {} as Spot]);
                  }}
                >
                  Add another spot
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit spot
                </Button>
              </Grid>
            </Box>
          </Box>
          <CopyrightSection sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
