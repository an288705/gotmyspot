import { Button, Card } from "../../libraries/gotmyspot-ui-library";
import { handleCancelReservation } from "../../controllers/apis";
import Reservation from "../../models/interfaces/Reservation";

export default function ReservationCard(props: { reservation: Reservation }) {
  return (
    <Card>
      <div>{props.reservation.address}</div>
      <div>start date: {props.reservation.startDay}</div>
      <div>end date: {props.reservation.endDay}</div>
      <Button onClick={() => handleCancelReservation(props.reservation.id)}>
        Cancel Reservation
      </Button>
    </Card>
  );
}
