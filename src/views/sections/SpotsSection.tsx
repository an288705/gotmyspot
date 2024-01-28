import SpotInfoCard from "../cards/SpotInfoCard";
import Spot from "../../models/interfaces/Spot";

export default function SpotsSection(props: { spots: Array<Spot> }) {
  return (
    <div>
      {props.spots.map((spot) => (
        <SpotInfoCard spot={spot} />
      ))}
    </div>
  );
}
