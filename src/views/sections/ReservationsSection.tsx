import ReservationCard from "../cards/ReservationCard";

export default function ReservationsSection(props: {
  reservations: Array<any>;
}) {
  return (
    <div>
      {props.reservations.map((reservationCardInfo) => (
        <ReservationCard reservationCardInfo={reservationCardInfo} />
      ))}
    </div>
  );
}
