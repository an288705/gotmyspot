import { Card } from "../../libraries/gotmyspot-ui-library";

export default function SpotCard(props: { spotInfo: string }) {
  return (
    <Card>
      <div>{props.spotInfo}</div>
    </Card>
  );
}
