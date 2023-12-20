import SpotReserveCard from "../cards/SpotReserveCard";

export default function SpotsReserveSection(props: {
  spots: Array<{ spotInfo: string; paymentLink: any }>;
}) {
  return (
    <div>
      {props.spots.map((spot) => (
        <SpotReserveCard spot={spot} />
      ))}
    </div>
  );
}
