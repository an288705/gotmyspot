import SpotCard from "../cards/SpotCard";

export default function SpotsSection(props: {
  spots: Array<{ spotInfo: string; paymentLink: any }>;
}) {
  return (
    <div>
      {props.spots.map((spot) => (
        <SpotCard spot={spot} />
      ))}
    </div>
  );
}
