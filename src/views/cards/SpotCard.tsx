import { Card } from "../../libraries/gotmyspot-component-library";

export default function SpotCard(props: { spotInfo: string }) {
  return (
    <Card>
      <div>{props.spotInfo}</div>
    </Card>
  );
}
