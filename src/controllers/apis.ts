import { supabase } from "../libraries/supabase";
import { stripe } from "../libraries/stripe";
import { CustomerModel } from "../models/CustomerModel";
import { HostModel } from "../models/HostModel";
import { NavigateFunction } from "react-router-dom";

export async function handleCustomerAuth(
  event: React.FormEvent<HTMLFormElement>,
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

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

  alert(
    "A confirmation link was sent to your email. Click it to verify sign up",
  );
}

export async function handleHostAuth(
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

export async function handleAuthSignIn(
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

  navigate("/", { replace: true });
}

export async function handleUpdateCustomer(
  customer: CustomerModel,
  event: React.FormEvent<HTMLFormElement>,
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name"));
  const paymentInfo = String(formData.get("paymentInfo"));
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionData.session) {
    const rowData = customer.customerId
      ? {
          id: customer.customerId,
          authId: sessionData.session.user.id,
          name: name,
        }
      : {
          authId: sessionData.session.user.id,
          name: name,
        };
    const { data, error } = await supabase
      .from("customerInfo")
      .upsert(rowData)
      .select();

    console.log(data);

    if (error) {
      alert("Error during account creation");
      console.log(error);
      return;
    }

    if (data) {
      customer.setCustomer(
        data[0].id,
        data[0].name,
        sessionData.session.user.email || "",
        sessionData.session.user.phone || "",
        data[0].paymentInfo,
        data[0].reservations,
      );
    }
  }
}

export async function handleUpdateHost(
  host: HostModel,
  event: React.FormEvent<HTMLFormElement>,
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name"));
  const paymentInfo = String(formData.get("paymentInfo"));
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionData.session) {
    const rowData = host.hostId
      ? {
          id: host.hostId,
          authId: sessionData.session.user.id,
          name: name,
        }
      : {
          authId: sessionData.session.user.id,
          name: name,
        };
    const { data, error } = await supabase
      .from("hostInfo")
      .upsert(rowData)
      .select();

    console.log(data);

    if (error) {
      alert("Error during account creation");
      console.log(error);
      return;
    }

    if (data) {
      host.setHost(
        data[0].id,
        data[0].companyName,
        data[0].name,
        sessionData.session.user.email || "",
        sessionData.session.user.phone || "",
        data[0].paymentInfo,
        data[0].spots,
      );
    }
  }
}

export async function setCustomerState(
  customer: CustomerModel,
  navigate: NavigateFunction,
) {
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionData.session) {
    const { data, error } = await supabase
      .from("customerInfo")
      .select()
      .eq("authId", sessionData.session.user.id);

    if (error) {
      alert("Info request error");
      console.log(error);
      return {
        settings: [{ text: "Sign In", href: "/sign-in" }],
      };
    }

    if (data.length == 0) {
      customer.setEmail(sessionData.session.user.email || "");
      navigate("/profile");
      return {
        settings: [
          { text: "Profile", href: "/profile" },
          { text: "Logout", href: "/" },
        ],
      };
    }

    customer.setCustomer(
      data[0].id,
      data[0].name,
      sessionData.session.user.email || "",
      sessionData.session.user.phone || "",
      data[0].paymentInfo,
      data[0].reservations,
    );
    return {
      settings: [
        { text: "Profile", href: "/profile" },
        { text: "Logout", href: "/" },
      ],
    };
  }

  return {
    settings: [{ text: "Sign In", href: "/sign-in" }],
  };
}

export async function setHostState(
  host: HostModel,
) {
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionData.session) {
    console.log(sessionData.session);
    const { data, error } = await supabase
      .from("hostInfo")
      .select()
      .eq("authId", sessionData.session.user.id);

    if (error) {
      alert("Info request error");
      console.log(error);
      return {
        settings: [{ text: "Sign In", href: "/host-sign-in" }],
      };
    }

    if (data.length == 0) {
      return {
        settings: [{ text: "Sign In", href: "/host-sign-in" }],
      };
    }

    host.setHost(
      data[0].id,
      data[0].companyName,
      data[0].name,
      sessionData.session.user.email || "",
      sessionData.session.user.phone || "",
      data[0].paymentInfo,
      data[0].spots,
    );
    return {
      settings: [
        { text: "Profile", href: "/profile" },
        { text: "Logout", href: "/" },
      ],
    };
  }

  return {
    settings: [{ text: "Sign In", href: "/host-sign-in" }],
  };
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

  host.setHost(
    authData.user.id,
    data[0].companyName,
    data[0].name,
    authData.user.email,
    authData.user.phone || "",
    data[0].paymentInfo,
    [],
  );

  navigate("/host", { replace: true });
}

export async function getSpots() {
  const price = await stripe.prices.create({
    currency: "usd",
    unit_amount: 1000,
    recurring: {
      interval: "month",
    },
    product_data: {
      name: "Gold Plan",
    },
  });

  const spots = await Promise.all([
    {
      spotInfo: "ex 1",
      paymentLink: await stripe.paymentLinks.create({
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
      }),
    },
    {
      spotInfo: "ex 2",
      paymentLink: await stripe.paymentLinks.create({
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
      }),
    },
  ]);

  console.log(spots);

  return spots;
}
