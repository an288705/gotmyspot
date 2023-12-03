import {
  Button,
  Typography,
} from "../../libraries/gotmyspot-component-library";
import Navbar from "./Navbar";
import RevenueChart from "./RevenueChart";
import ReservationsSection from "../sections/ReservationsSection";
import SpotsSection from "../sections/SpotsSection";

export default function HostHome() {
  const res = ["ex 1", "ex 2"];
  return (
    <div>
      <Navbar />
      <Typography sx={{ textDecoration: "underline" }}>Dashboard</Typography>
      <RevenueChart />
      <Button>View report</Button>
      <Typography sx={{ textDecoration: "underline" }}>Manage spots</Typography>
      <SpotsSection spots={res} />
      <Typography sx={{ textDecoration: "underline" }}>Reservations</Typography>
      <ReservationsSection reservations={res} />
    </div>
  );
}
