import SpotCard from "../cards/SpotCard";

export default function SpotsSection(props: { spots: Array<any> }) {
  return (
    <div>
      {props.spots.map((spot) => (
        <SpotCard spot={spot} />
      ))}
    </div>
  );
}
