import React from "react";
import { CustomerContext } from "../../controllers/contexts";
import NavbarSection from "./NavbarSection";
import { setCustomerState } from "../../controllers/apis";
import { useNavigate } from "react-router-dom";

export default function CustomerHome(props: { page: JSX.Element }) {
  const customer = React.useContext(CustomerContext);
  const navigate = useNavigate();
  const [settings, setSettings] = React.useState<
    { text: string; href: string }[]
  >([{ text: "Sign In", href: "/sign-in" }]);

  async function setPageState() {
    const state = await setCustomerState(customer, navigate);
    setSettings(state!.settings);
  }

  React.useEffect(() => {
    setPageState();
  }, []);

  return (
    <div>
      <NavbarSection settings={settings} />
      {props.page}
    </div>
  );
}
