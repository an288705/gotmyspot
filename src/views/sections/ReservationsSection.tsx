import ReservationCard from "../cards/ReservationCard";
import Reservation from "../../models/interfaces/Reservation";

export default function ReservationsSection(props: {
  reservations: Array<Reservation>;
}) {
  return (
    <div>
      {props.reservations.map((reservation) => (
        <ReservationCard reservation={reservation} />
      ))}
    </div>
  );
}
