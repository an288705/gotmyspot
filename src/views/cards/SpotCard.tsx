import { Card, Link } from "../../libraries/gotmyspot-ui-library";

export default function SpotCard(props: {
  spot: { spotInfo: string; paymentLink: any };
}) {
  return (
    <Card>
      <div>{props.spot.spotInfo}</div>
      <Link href={props.spot.paymentLink}></Link>
    </Card>
  );
}
