import { Card, Link } from "../../libraries/gotmyspot-ui-library";

export default function ReserveSpotCard(props: {
  spot: { spotInfo: any; paymentLink: any };
}) {
  const address: string = props.spot.spotInfo.address || "test";
  return (
    <Card>
      <div>{address}</div>
      <Link href={props.spot.paymentLink.url}>Reserve</Link>
    </Card>
  );
}
