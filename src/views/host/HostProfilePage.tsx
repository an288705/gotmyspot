import React from "react";
import { Button, Typography } from "../../libraries/gotmyspot-ui-library";
import { HostContext } from "../../controllers/contexts";
import HostProfileEdit from "./HostProfileEdit";
import HostProfileView from "./HostProfileView";

export default function ProfilePage() {
  const host = React.useContext(HostContext);
  const [isEditing, setIsEditing] = React.useState(!host.isHostSet);
  return (
    <>
      {!host.isHostSet && <Typography>please finish sign in</Typography>}
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
