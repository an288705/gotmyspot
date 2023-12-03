import {
  styled,
  Box,
  Button,
  Typography,
  Container,
} from "../libraries/gotmyspot-component-library";
import { useNavigate } from "react-router-dom";

const SellParkingPageLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
}));

const Background = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function SellParkingPage() {
  const navigate = useNavigate();

  return (
    <SellParkingPageLayoutRoot>
      <Container
        sx={{
          mt: 10,
          mb: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
        <Typography color="inherit" align="center" variant="h5">
          Sell Parking With GotMySpot
        </Typography>
        <Typography color="inherit" align="center" variant="h4">
          Generate passive income with ease
        </Typography>
        <Container
          sx={{ mt: 10, mb: 10, display: "flex", position: "relative" }}
        >
          <Typography align="center" variant="h6">
            On our platform, you can showcase your parking spaces for various
            rental options, including hourly, monthly, or event-based rentals –
            or any combination that suits your preferences. We're dedicated to
            assisting you in optimizing the value of your parking assets by
            offering a customized selling plan tailored to your needs.
          </Typography>
        </Container>
        <Button variant="contained" onClick={() => navigate("/host-sign-up")}>
          Become a host
        </Button>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: "#7fc7d9", // Average color of the background image.
            backgroundPosition: "center",
          }}
        />
      </Container>
    </SellParkingPageLayoutRoot>
  );
}
