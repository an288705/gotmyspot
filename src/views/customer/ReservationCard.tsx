import { Card } from "@mui/material";

export default function ReservationCard(props: {
  reservationCardInfo: string;
}) {
  return (
    <Card>
      <div>{props.reservationCardInfo}</div>
    </Card>
  );
}
