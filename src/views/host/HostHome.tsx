import React from "react";
import { Button, Typography } from "../../libraries/gotmyspot-ui-library";
import Navbar from "./Navbar";
import RevenueChart from "./RevenueChart";
import ReservationsSection from "../sections/ReservationsSection";
import SpotsSection from "../sections/SpotsSection";
import { getSpots } from "../../controllers/apis";

export default function HostHome() {
  const [reservations, setReservations] = React.useState(Array<any>);

  async function setReservationsState() {
    const res = await getSpots();
    setReservations(res);
  }

  React.useEffect(() => {
    setReservationsState();
  }, []);
  return (
    <div>
      <Navbar />
      <Typography sx={{ textDecoration: "underline" }}>Dashboard</Typography>
      <RevenueChart />
      <Button>View report</Button>
      <Typography sx={{ textDecoration: "underline" }}>Manage spots</Typography>
      <SpotsSection spots={reservations} />
      <Typography sx={{ textDecoration: "underline" }}>Reservations</Typography>
      <ReservationsSection reservations={reservations} />
    </div>
  );
}
