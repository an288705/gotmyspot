import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Icons,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Modal,
  Fade,
} from "../../libraries/gotmyspot-ui-library";
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

  return (
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
              Your request has been received, we will reach out to you regarding
              your application. You can learn about hosting on our seller's page
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Icons.LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                  autoComplete="companyName"
                />
              </Grid>
              {spotFormCount.map((count) => (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id={"spotAddress" + String(count)}
                    label="Spot Address"
                    name={"spotAddress" + String(count)}
                    autoComplete={"spotAddress" + String(count)}
                  />
                </Grid>
              ))}
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() =>
                  setSpotFormCount((prev) => [...prev, prev.length + 1])
                }
              >
                Add another address
              </Button>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/host-sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CopyrightSection sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
