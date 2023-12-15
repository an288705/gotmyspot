import { Card } from "../../libraries/gotmyspot-ui-library";

export default function ReservationCard(props: {
  reservation: { spotInfo: string; paymentLink: any };
}) {
  return (
    <Card>
      <div>{props.reservation.spotInfo}</div>
    </Card>
  );
}
