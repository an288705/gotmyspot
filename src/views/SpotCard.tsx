import { Card } from "@mui/material";

export default function SpotCard(props: { spotCardInfo: string }) {
  return (
    <Card>
      <div>{props.spotCardInfo}</div>
    </Card>
  );
}
