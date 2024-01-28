import React from "react";
import { Button, Card } from "../../libraries/gotmyspot-ui-library";
import { openPaymentLinkForReservedTime } from "../../controllers/apis";
import Spot from "../../models/interfaces/Spot";

export default function SpotReserveCard(props: { spot: Spot }) {
  console.log("spot in spotReserveCard", props.spot);
  return (
    <Card>
      <div>{props.spot.address}</div>
      <Button
        onClick={() =>
          openPaymentLinkForReservedTime(
            props.spot.rates,
            100,
            props.spot.maxReserveTimeInSeconds,
            props.spot.address,
          )
        }
      >
        Reserve
      </Button>
    </Card>
  );
}
