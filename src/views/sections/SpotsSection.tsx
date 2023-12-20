import SpotInfoCard from "../cards/SpotInfoCard";

export default function SpotsSection(props: { spots: Array<any> }) {
  return (
    <div>
      {props.spots.map((spot) => (
        <SpotInfoCard spot={spot} />
      ))}
    </div>
  );
}
