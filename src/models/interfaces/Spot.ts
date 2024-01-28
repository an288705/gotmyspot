import Period from "./Period";
import Rate from "./Rate";

export default interface Spot {
  id: string;
  latitude: number;
  longitude: number;
  address: string;
  details: string;
  amenities: string;
  isConfirmed: boolean;
  availability: Array<Period>;
  rates: Array<Rate>;
  maxReserveTimeInSeconds: number;
}
