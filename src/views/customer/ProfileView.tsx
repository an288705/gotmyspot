import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "../../libraries/gotmyspot-ui-library";
import { CustomerContext } from "../../controllers/contexts";
import { handleUpdateCustomer } from "../../controllers/apis";

export default function ProfileView() {
  const customer = React.useContext(CustomerContext);
  return (
    <Box
      component="form"
      noValidate
      onSubmit={(event) => handleUpdateCustomer(customer, event)}
    >
      <Typography>Email</Typography>
      <Typography>{customer.email}</Typography>
      <Typography>Password</Typography>
      <Typography>example@example</Typography>
      <Typography>Name</Typography>
      <Typography>{customer.name}</Typography>
      <Typography>Payment</Typography>
      <Typography>{customer.paymentInfo}</Typography>
    </Box>
  );
}
