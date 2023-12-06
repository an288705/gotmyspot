import React from "react";
import { Button, Typography } from "../../libraries/gotmyspot-ui-library";
import { CustomerContext } from "../../controllers/contexts";

export default function ProfilePage() {
  const customer = React.useContext(CustomerContext);
  return (
    <div>
      <Typography>
        My Account
        <Button>Edit</Button>
      </Typography>
      <Typography>Email</Typography>
      <Typography>{customer.email}</Typography>
      <Typography>Password</Typography>
      <Typography>example@example</Typography>
      <Typography>Payment</Typography>
      <Typography>****0000</Typography>
    </div>
  );
}
