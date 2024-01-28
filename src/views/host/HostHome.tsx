import React from "react";
import { Button, Typography } from "../../libraries/gotmyspot-ui-library";
import NavbarSection from "./NavbarSection";
import RevenueChart from "./RevenueChart";
import ReservationsSection from "../sections/ReservationsSection";
import SpotsSection from "../sections/SpotsSection";
import { getSpotsByIds, setHostState } from "../../controllers/apis";
import { HostContext } from "../../controllers/contexts";
import Reservation from "../../models/interfaces/Reservation";

export default function HostHome() {
  const host = React.useContext(HostContext);
  const [reservations, setReservations] = React.useState(Array<Reservation>);
  const [settings, setSettings] = React.useState<
    { text: string; href: string }[]
  >([{ text: "Sign In", href: "/sign-in" }]);

  async function setPageState() {
    const state = await setHostState(host);
    setSettings(state!.settings);
  }

  async function setReservationsState() {
    const res = await getSpotsByIds(["a9fa05c4-f027-4c6a-ad39-356542131e2d"]);
    setReservations(res);
  }

  React.useEffect(() => {
    setPageState();
    setReservationsState();
  }, []);
  return (
    <div>
      <NavbarSection settings={settings} />
      {host.isHostSet || true ? (
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
      ) : (
        <>Please wait to hear back from our team</>
      )}
    </div>
  );
}
