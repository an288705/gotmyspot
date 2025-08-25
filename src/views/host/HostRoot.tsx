import React from "react";
import NavbarSection from "./NavbarSection";
import { setHostState } from "../../controllers/apis";
import { HostContext } from "../../controllers/contexts";

export default function HostRoot(props: { page: JSX.Element }) {
  const host = React.useContext(HostContext);
  const [settings, setSettings] = React.useState<
    { text: string; href: string }[]
  >([{ text: "Sign In", href: "/host-sign-in" }]);

  async function setPageState() {
    const state = await setHostState(host);
    setSettings(state!.settings);
    console.log(host);
  }

  React.useEffect(() => {
    setPageState();
  }, []);
  return (
    <div>
      <NavbarSection settings={settings} />
      {host.hostId && props.page}
    </div>
  );
}
