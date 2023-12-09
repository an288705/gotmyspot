import React from "react";
import { Button, Typography } from "../../libraries/gotmyspot-ui-library";
import { CustomerContext } from "../../controllers/contexts";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";

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
        <ProfileEdit setIsEditing={setIsEditing} />
      ) : (
        <ProfileView />
      )}
    </>
  );
}
