import { Card } from "../../libraries/gotmyspot-component-library";

export default function ReservationCard(props: {
  reservationCardInfo: string;
}) {
  return (
    <Card>
      <div>{props.reservationCardInfo}</div>
    </Card>
  );
}
