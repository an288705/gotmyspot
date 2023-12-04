import Period from "./Period";
import Rate from "./Rate";

export default interface Spot {
  id: string;
  lat: number;
  long: number;
  pricing: number;
  address: string;
  details: string;
  amenities: string;
  Availability: Array<Period>;
  Rates: Array<Rate>;
}
