import * as React from "react";
import { getRateWithReservationTime } from "../../controllers/apis";
import {
  Box,
  Button,
  Fade,
  Grid,
  Icons,
  Modal,
  Typography,
} from "../../libraries/gotmyspot-ui-library";
import Spot from "../../models/interfaces/Spot";
import SpotReserveCard from "../cards/SpotReserveCard";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SpotsReserveSection(props: { spots: Array<Spot> }) {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  return (
    <>
      <Grid container>
        <Grid item>
          <Button onClick={() => setOpenModal(true)}>
            <Icons.Sort /> Sort
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={() => setOpenModal(false)}
            closeAfterTransition
          >
            <Box sx={style}>
              Sort By:
              <Button onClick={() => setOpenModal(false)}>Distance</Button>
              <Button onClick={() => setOpenModal(false)}>Price</Button>
            </Box>
          </Modal>
        </Grid>
        <Grid item>
          <Button>
            <Icons.FilterAlt /> Filter
          </Button>
        </Grid>
      </Grid>
      <div>
        {props.spots.map((spot) => (
          <SpotReserveCard
            spot={spot}
            rate={getRateWithReservationTime(spot.rates, 100)}
          />
        ))}
      </div>
    </>
  );
}
