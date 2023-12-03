import { supabase } from "../libraries/supabase";
import { CustomerModel } from "../models/CustomerModel";
import { HostModel } from "../models/HostModel";
import { NavigateFunction } from "react-router-dom";

export async function handleSignInHost(
  host: HostModel,
  event: React.FormEvent<HTMLFormElement>,
  navigate: NavigateFunction,
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    });

  if (authError) {
    alert(authError);
    return;
  }

  if (!authData.user) {
    alert("issue signing in user");
    return;
  }

  if (!authData.user.email) {
    alert("user email not saved");
    return;
  }

  // const { data, error } = await supabase
  //   .from("userProfile")
  //   .select()
  //   .eq("userId", authData.user.id);

  // if (!data) {
  //   alert(error);
  //   return;
  // }

  host.signIn(
    authData.user.id,
    "",
    "",
    authData.user.email,
    authData.user.phone || "",
    "",
    [],
  );

  navigate("/", { replace: true });
}

export async function handleSignInCustomer(
  customer: CustomerModel,
  event: React.FormEvent<HTMLFormElement>,
  navigate: NavigateFunction,
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    });

  if (authError) {
    alert(authError);
    return;
  }

  if (!authData.user) {
    alert("issue signing in user");
    return;
  }

  if (!authData.user.email) {
    alert("user email not saved");
    return;
  }

  // const { data, error } = await supabase
  //   .from("userProfile")
  //   .select()
  //   .eq("userId", authData.user.id);

  // if (!data) {
  //   alert(error);
  //   return;
  // }

  customer.signIn(
    authData.user.id,
    "",
    authData.user.email,
    authData.user.phone || "",
    "",
  );

  navigate("/", { replace: true });
}
