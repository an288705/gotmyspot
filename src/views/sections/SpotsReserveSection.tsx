import { getRateWithReservationTime } from "../../controllers/apis";
import Spot from "../../models/interfaces/Spot";
import SpotReserveCard from "../cards/SpotReserveCard";

export default function SpotsReserveSection(props: { spots: Array<Spot> }) {
  return (
    <div>
      {props.spots.map((spot) => (
        <SpotReserveCard
          spot={spot}
          rate={getRateWithReservationTime(spot.rates, 100)}
        />
      ))}
    </div>
  );
}
