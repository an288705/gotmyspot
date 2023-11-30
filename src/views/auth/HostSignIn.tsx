import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HostContext } from "../../controllers/contexts";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase/supabase";
import CopyrightSection from "../sections/CopyrightSection";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function HostSignIn() {
  const host = React.useContext(HostContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email: String(formData.get("email")),
        password: String(formData.get("password")),
      });

    if (authError) {
      alert(authError);
      return;
    }

    if (!authData.user) {
      alert("issue signing in user");
      return;
    }

    if (!authData.user.email) {
      alert("user email not saved");
      return;
    }

    // const { data, error } = await supabase
    //   .from("userProfile")
    //   .select()
    //   .eq("userId", authData.user.id);

    // if (!data) {
    //   alert(error);
    //   return;
    // }

    host.signIn(
      authData.user.id,
      "",
      "",
      authData.user.email,
      authData.user.phone || "",
      "",
      [],
    );

    navigate("/", { replace: true });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/host-sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CopyrightSection sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
