import React from "react";
import { Button, Card, Grid } from "../../libraries/gotmyspot-ui-library";
import { currency } from "../../constants";
import { openPaymentLinkForRate } from "../../controllers/apis";
import Spot from "../../models/interfaces/Spot";
import Rate from "../../models/interfaces/Rate";

export default function SpotReserveCard(props: { spot: Spot; rate: Rate }) {
  console.log("spot in spotReserveCard", props.spot);
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid item>
          <img src={""} alt="img" />
        </Grid>
        <Grid item>
          <div>{props.spot.address}</div>
          <div>
            {currency[props.rate.currency]}
            {props.rate.cost / 100}
          </div>
          <Button
            onClick={() =>
              openPaymentLinkForRate(props.rate, props.spot.address)
            }
          >
            Reserve
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
