import SpotCard from "../cards/SpotCard";

export default function SpotsSection(props: { spots: Array<any> }) {
  return (
    <div>
      {props.spots.map((spotInfo) => (
        <SpotCard spotInfo={spotInfo} />
      ))}
    </div>
  );
}
