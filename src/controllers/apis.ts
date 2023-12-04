import { supabase } from "../libraries/supabase";
import { CustomerModel } from "../models/CustomerModel";
import { HostModel } from "../models/HostModel";
import { NavigateFunction } from "react-router-dom";

export async function handleSignUpCustomer(
  customer: CustomerModel,
  event: React.FormEvent<HTMLFormElement>,
  navigate: NavigateFunction,
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name =
    String(formData.get("firstName")) + " " + String(formData.get("lastName"));
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const phone = String(formData.get("phone"));

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    alert("Error during account creation");
    console.log(error);
    return;
  }

  if (!data.user) {
    alert("Issue fetching user");
    return;
  }

  if (!data.user.email) {
    alert("Issue assigning email");
    return;
  }

  /* 
  customer must confirm email to validate session token for supabase crud. redirect to email confirmation page and
  if customer is confirmed, then insert to table.
   */

  //   console.log(data.user.id, name);
  //   const { error: insertError } = await supabase.from("customerInfo").insert({
  //     id: data.user.id,
  //     name: name,
  //     paymentInfo: "",
  //     reservations: [],
  //     isConfirmed: false,
  //   });

  //   if (insertError) {
  //     alert("Error during account creation");
  //     console.log(insertError);
  //     return;
  //   }

  //   customer.signIn(data.user.id, name, email, phone, "", [], false);
  //   navigate("/", { replace: true });
}

export async function handleSignUpHost(
  event: React.FormEvent<HTMLFormElement>,
  spotFormCount: Array<number>,
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name =
    String(formData.get("firstName")) + " " + String(formData.get("lastName"));
  const companyName = String(formData.get("companyName"));
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const phone = String(formData.get("phone"));
  let spots: any[] = [];
  spotFormCount.map((count) =>
    spots.push(String(formData.get("spotAddress" + String(count)))),
  );

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    alert("Error during account creation");
    console.log(error);
    return;
  }

  if (!data.user) {
    alert("Issue fetching user");
    return;
  }

  if (!data.user.email) {
    alert("Issue assigning email");
    return;
  }

  /* 
  host must confirm email to validate session token for supabase crud. platform should confirm the spot info
   */

  //   console.log(data.user.id, companyName);
  //   let spotIds = [];
  //   for (const address of spots) {
  //     const spotId = crypto.randomUUID();
  //     const { error: insertSpotError } = await supabase.from("spotInfo").insert({
  //       id: spotId,
  //       lat: name,
  //       long: companyName,
  //       pricing: "",
  //       address: address,
  //       details: [],
  //       amenities: "",
  //       availability: [],
  //       rates: [],
  //       isConfirmed: false,
  //     });

  //     if (insertSpotError) {
  //       alert("Error during account creation");
  //       console.log(insertSpotError);
  //       return;
  //     }
  //     spotIds.push(spotId);
  //   }

  //   const { error: insertError } = await supabase.from("hostInfo").insert({
  //     id: data.user.id,
  //     name: name,
  //     companyName: companyName,
  //     paymentInfo: "",
  //     balance: 0,
  //     spots: spotIds,
  //     isConfirmed: false,
  //   });

  //   if (insertError) {
  //     alert("Error during account creation");
  //     console.log(insertError);
  //     return;
  //   }
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

  const { data, error } = await supabase
    .from("customerInfo")
    .select()
    .eq("id", authData.user.id);

  if (!data) {
    alert("Info request error");
    console.log(error);
    return;
  }

  customer.signIn(
    authData.user.id,
    data[0].name,
    authData.user.email,
    authData.user.phone || "",
    data[0].paymentInfo,
    data[0].reservations,
    data[0].isConfirmed,
  );
  navigate("/", { replace: true });
}

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

  const { data, error } = await supabase
    .from("hostInfo")
    .select()
    .eq("id", authData.user.id);

  if (!data) {
    alert("Info request error");
    console.log(error);
    return;
  }

  host.signIn(
    authData.user.id,
    data[0].companyName,
    data[0].name,
    authData.user.email,
    authData.user.phone || "",
    data[0].paymentInfo,
    [],
    data[0].accountConfirmed,
  );

  navigate("/host", { replace: true });
}
