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
} from "../../libraries/gotmyspot-ui-library";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CopyrightSection from "../sections/CopyrightSection";
import { handleHostAuth } from "../../controllers/apis";

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
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [spotFormCount, setSpotFormCount] = React.useState<Array<number>>([1]);
  const [availabilityCount, setAvailabilityCount] = React.useState<
    Array<number>
  >([1]);
  const [rateCount, setRateCount] = React.useState<Array<number>>([1]);

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
              onSubmit={(event) => {
                handleHostAuth(event, spotFormCount);
                setOpenModal(true);
              }}
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
                      />
                      <TextField
                        required
                        fullWidth
                        id={"Details" + String(count)}
                        label="Details"
                        name={"Details" + String(count)}
                        autoComplete={"Details" + String(count)}
                      />
                    </Grid>
                    {availabilityCount.map((count) => (
                      <>
                        <Grid item>
                          Available day range
                          <div>
                            <DatePicker onChange={(date: any) => {}} />
                          </div>
                          <div>
                            <DatePicker onChange={(date: any) => {}} />
                          </div>
                        </Grid>
                        <Grid item>
                          Open time
                          <div>
                            <TimePicker onChange={(time: any) => {}} />
                          </div>
                          Close time
                          <div>
                            <TimePicker onChange={(time: any) => {}} />
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
                            {rateCount.map((count) => (
                              <>
                                <TableRow key={1}>
                                  <TableCell align="right">
                                    <TextField
                                      required
                                      fullWidth
                                      id={"Cost" + String(count)}
                                      label="Cost"
                                      name={"Cost" + String(count)}
                                      autoComplete={"Cost" + String(count)}
                                    />
                                  </TableCell>
                                  <TableCell align="right">
                                    <TextField
                                      required
                                      fullWidth
                                      id={"Time" + String(count)}
                                      label="Time"
                                      name={"Time" + String(count)}
                                      autoComplete={"Time" + String(count)}
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
                          onClick={() =>
                            setRateCount((prev) => [...prev, prev.length + 1])
                          }
                        >
                          Add another rate
                        </Button>
                      </>
                    }
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={() =>
                        setAvailabilityCount((prev) => [
                          ...prev,
                          prev.length + 1,
                        ])
                      }
                    >
                      Add another time slot
                    </Button>
                  </>
                ))}
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() =>
                    setSpotFormCount((prev) => [...prev, prev.length + 1])
                  }
                >
                  Add another spot
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
