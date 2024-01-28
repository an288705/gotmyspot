import { Card, Link } from "../../libraries/gotmyspot-ui-library";
import Spot from "../../models/interfaces/Spot";

export default function SpotInfoCard(props: { spot: Spot }) {
  return (
    <Card>
      <div>{props.spot.address}</div>
    </Card>
  );
}
