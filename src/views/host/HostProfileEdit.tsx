import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "../../libraries/gotmyspot-ui-library";
import { HostContext } from "../../controllers/contexts";
import { handleUpdateHost } from "../../controllers/apis";

export default function HostProfileEdit(props: {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const host = React.useContext(HostContext);
  return (
    <Box
      component="form"
      noValidate
      onSubmit={(event) => {
        handleUpdateHost(host, event);
        props.setIsEditing(false);
      }}
    >
      <Typography>Email</Typography>
      <Typography>{host.email}</Typography>
      <Typography>Password</Typography>
      <Typography>example@example</Typography>
      <Typography>Name</Typography>
      <TextField
        required
        fullWidth
        id="name"
        label="name"
        name="name"
        autoComplete="name"
      />
      <Typography>Payment</Typography>
      <TextField
        fullWidth
        id="paymentInfo"
        label="payment info"
        name="paymentInfo"
        autoComplete="paymentInfo"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Update Profile
      </Button>
    </Box>
  );
}
