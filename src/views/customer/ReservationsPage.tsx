import { Typography } from "../../libraries/gotmyspot-component-library";
import ReservationsSection from "../sections/ReservationsSection";
import SpotsSection from "../sections/SpotsSection";

export default function ReservationsPage() {
  const res = ["ex 1", "ex 2"];
  return (
    <div>
      <Typography sx={{ textDecoration: "underline" }}>
        Your reservations
      </Typography>
      <ReservationsSection reservations={res} />
      <Typography sx={{ textDecoration: "underline" }}>Saved spots</Typography>
      <SpotsSection spots={res} />
    </div>
  );
}
