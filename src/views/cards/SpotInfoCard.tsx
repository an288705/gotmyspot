import { Card, Link } from "../../libraries/gotmyspot-ui-library";

export default function SpotInfoCard(props: { spot: any }) {
  return (
    <Card>
      <div>{props.spot.address}</div>
    </Card>
  );
}
