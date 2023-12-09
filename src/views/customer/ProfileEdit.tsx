import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "../../libraries/gotmyspot-ui-library";
import { CustomerContext } from "../../controllers/contexts";
import { handleUpdateCustomer } from "../../controllers/apis";

export default function ProfileEdit(props: {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const customer = React.useContext(CustomerContext);
  return (
    <Box
      component="form"
      noValidate
      onSubmit={(event) => {
        handleUpdateCustomer(customer, event);
        props.setIsEditing(false);
      }}
    >
      <Typography>Email</Typography>
      <Typography>{customer.email}</Typography>
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
