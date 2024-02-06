import React from "react";
import { Typography } from "../../libraries/gotmyspot-ui-library";
import ReservationsSection from "../sections/ReservationsSection";
import SpotsReserveSection from "../sections/SpotsReserveSection";
import {
  getReservationsByIds,
  getSavedSpotsByIds,
} from "../../controllers/apis";
import Reservation from "../../models/interfaces/Reservation";
import Spot from "../../models/interfaces/Spot";
import { CustomerContext } from "../../controllers/contexts";

export default function ReservationsPage() {
  const customer = React.useContext(CustomerContext);
  const [reservations, setReservations] = React.useState<Array<Reservation>>();
  const [savedSpots, setSavedSpots] = React.useState<Array<Spot>>();

  async function setReservationsState() {
    const res = await getReservationsByIds(customer.reservationsIds);
    console.log("res", res);
    setReservations(res);
  }

  async function setSavedSpotsState() {
    const res = await getSavedSpotsByIds(customer.savedSpotsIds);
    setSavedSpots(res);
    console.log("res", res);
  }

  React.useEffect(() => {
    console.log(customer);
    setReservationsState();
    setSavedSpotsState();
  }, []);
  return (
    <div>
      <Typography sx={{ textDecoration: "underline" }}>
        Your reservations
      </Typography>
      {reservations && <ReservationsSection reservations={reservations} />}
      <Typography sx={{ textDecoration: "underline" }}>Saved spots</Typography>
      {savedSpots && <SpotsReserveSection spots={savedSpots} />}
    </div>
  );
}
