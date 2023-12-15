import ReserveSpotCard from "../cards/ReserveSpotCard";

export default function ReserveSpotsSection(props: {
  spots: Array<{ spotInfo: string; paymentLink: any }>;
}) {
  return (
    <div>
      {props.spots.map((spot) => (
        <ReserveSpotCard spot={spot} />
      ))}
    </div>
  );
}
