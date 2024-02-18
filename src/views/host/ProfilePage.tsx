import React from "react";
import { Button, Typography } from "../../libraries/gotmyspot-ui-library";
import { CustomerContext } from "../../controllers/contexts";
import HostProfileEdit from "./HostProfileEdit";
import HostProfileView from "./HostProfileView";

export default function ProfilePage() {
  const customer = React.useContext(CustomerContext);
  const [isEditing, setIsEditing] = React.useState(!customer.isCustomerSet);
  return (
    <>
      {!customer.isCustomerSet && (
        <Typography>please finish sign in</Typography>
      )}
      <Typography>
        My Account
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      </Typography>
      {isEditing ? (
        <HostProfileEdit setIsEditing={setIsEditing} />
      ) : (
        <HostProfileView />
      )}
    </>
  );
}
