import React from "react";
import { HostContext } from "../../controllers/contexts";
import Reservation from "../../models/interfaces/Reservation";
import { getSpotsByIds } from "../../controllers/apis";
import { Button, Typography } from "../../libraries/gotmyspot-ui-library";
import RevenueChart from "./RevenueChart";
import ReservationsSection from "../sections/ReservationsSection";

export default function HostHomePage() {
  const host = React.useContext(HostContext);
  const [reservations, setReservations] = React.useState(Array<Reservation>);
  async function setReservationsState() {
    console.log("reservationIds", host.reservationsIds);
    const res = await getSpotsByIds(host.reservationsIds);
    console.log("res of get reservations", res);
    setReservations(res);
  }

  React.useEffect(() => {
    setReservationsState();
  }, []);

  return (
    <div>
      {host.isHostSignUpDone && host.isHostSet ? (
        <>
          <Typography sx={{ textDecoration: "underline" }}>
            Dashboard
          </Typography>
          <RevenueChart />
          <Button>View report</Button>
          <Typography sx={{ textDecoration: "underline" }}>
            Manage spots
          </Typography>
          {/* <SpotsSection spots={spots} /> */}
          <Typography sx={{ textDecoration: "underline" }}>
            Reservations
          </Typography>
          <ReservationsSection reservations={reservations} />
        </>
      ) : host.isHostSet ? (
        <>
          Please wait to hear back from our team about the status of your
          application
        </>
      ) : (
        <>Please sign in</>
      )}
    </div>
  );
}
