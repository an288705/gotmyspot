import React from "react";
import { Typography } from "../../libraries/gotmyspot-ui-library";
import ReservationsSection from "../sections/ReservationsSection";
import ReserveSpotsSection from "../sections/ReserveSpotsSection";
import { getSpots } from "../../controllers/apis";

export default function ReservationsPage() {
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
      <Typography sx={{ textDecoration: "underline" }}>
        Your reservations
      </Typography>
      <ReservationsSection reservations={reservations} />
      <Typography sx={{ textDecoration: "underline" }}>Saved spots</Typography>
      <ReserveSpotsSection spots={reservations} />
    </div>
  );
}
