const stripe = require("stripe")(process.env.REACT_APP_STRIPE_API_KEY);
export default stripe;
