import ReservationCard from "./ReservationCard";

export default function ReservationsPage() {
  const res = ["ex 1", "ex 2"];
  return (
    <div>
      {res.map((reservationCardInfo) => (
        <ReservationCard reservationCardInfo={reservationCardInfo} />
      ))}
    </div>
  );
}
