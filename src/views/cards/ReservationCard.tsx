import { Card } from "../../libraries/gotmyspot-ui-library";

export default function ReservationCard(props: { reservation: any }) {
  return (
    <Card>
      <div>{props.reservation.address}</div>
      <div>start date: {props.reservation.startDay}</div>
      <div>end date: {props.reservation.endDay}</div>
    </Card>
  );
}
