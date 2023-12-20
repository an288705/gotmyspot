import React from "react";
import { Button, Card } from "../../libraries/gotmyspot-ui-library";
import { openPaymentLinkForReservedTime } from "../../controllers/apis";

export default function SpotReserveCard(props: { spot: any }) {
  return (
    <Card>
      <div>{props.spot.address}</div>
      <Button
        onClick={() =>
          openPaymentLinkForReservedTime(
            props.spot.rates,
            100,
            props.spot.address,
          )
        }
      >
        Reserve
      </Button>
    </Card>
  );
}
