import React from "react";
import { Typography } from "../../libraries/gotmyspot-ui-library";
import ReservationsSection from "../sections/ReservationsSection";
import SpotsReserveSection from "../sections/SpotsReserveSection";
import { getReservationsByIds } from "../../controllers/apis";
import Reservation from "../../models/interfaces/Reservation";

export default function ReservationsPage() {
  const [reservations, setReservations] = React.useState(Array<Reservation>);

  async function setReservationsState() {
    const res = await getReservationsByIds([
      "466c8032-ebce-467c-9cc1-5258493f2022",
    ]);
    setReservations(res);
    console.log("res", res);
  }

  React.useEffect(() => {
    setReservationsState();
  }, []);
  return (
    <div>
      <Typography sx={{ textDecoration: "underline" }}>
        Your reservations
      </Typography>
      <ReservationsSection reservations={reservations} />
      <Typography sx={{ textDecoration: "underline" }}>Saved spots</Typography>
      {/* <SpotsReserveSection spots={spots} /> */}
    </div>
  );
}
