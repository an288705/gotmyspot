import Reservation from "./interfaces/Reservation";

export class CustomerModel {
  public customerId: string;
  public name: string;
  public email: string;
  public phone: string;
  public paymentInfo: string;
  public reservations: Array<Reservation>;
  public accountConfirmed: boolean;
  public signedIn: boolean;

  constructor() {
    this.customerId = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.paymentInfo = "";
    this.reservations = [];
    this.accountConfirmed = false;
    this.signedIn = false;
  }

  signIn = (
    customerId: string,
    name: string,
    email: string,
    phone: string,
    paymentInfo: string,
    reservations: Array<Reservation>,
    accountConfirmed: boolean,
  ) => {
    this.customerId = customerId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.paymentInfo = paymentInfo;
    this.reservations = reservations;
    this.accountConfirmed = accountConfirmed;
    this.signedIn = true;
  };

  signOut = () => {
    this.customerId = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.paymentInfo = "";
    this.reservations = [];
    this.accountConfirmed = false;
    this.signedIn = false;
  };
}
