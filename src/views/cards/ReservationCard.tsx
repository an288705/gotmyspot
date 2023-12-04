import { Card } from "../../libraries/gotmyspot-ui-library";

export default function ReservationCard(props: {
  reservationCardInfo: string;
}) {
  return (
    <Card>
      <div>{props.reservationCardInfo}</div>
    </Card>
  );
}
