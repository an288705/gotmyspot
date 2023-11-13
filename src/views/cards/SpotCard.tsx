import { Card } from "@mui/material";

export default function SpotCard(props: { spotInfo: string }) {
  return (
    <Card>
      <div>{props.spotInfo}</div>
    </Card>
  );
}
