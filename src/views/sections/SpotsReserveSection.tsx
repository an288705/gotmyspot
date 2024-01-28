import { Button, Grid, Icons } from "../../libraries/gotmyspot-ui-library";
import Spot from "../../models/interfaces/Spot";
import SpotReserveCard from "../cards/SpotReserveCard";

export default function SpotsReserveSection(props: { spots: Array<Spot> }) {
  return (
    <>
      <Grid container>
        <Grid item>
          <Button>
            <Icons.Sort /> Sort
          </Button>
        </Grid>
        <Grid item>
          <Button>
            <Icons.FilterAlt /> Filter
          </Button>
        </Grid>
      </Grid>
      <div>
        {props.spots.map((spot) => (
          <SpotReserveCard spot={spot} reservationTimeInSeconds={100} />
        ))}
      </div>
    </>
  );
}
