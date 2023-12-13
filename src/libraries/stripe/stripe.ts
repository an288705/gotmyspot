const stripeApiKey = process.env.REACT_APP_STRIPE_API_TEST_KEY;

if (!stripeApiKey) {
  throw new ReferenceError("Environment variables undefined");
}

const stripe = require("stripe")(stripeApiKey);
export default stripe;
