import Reservation from "./interfaces/Reservation";

export class CustomerModel {
  public customerId: string;
  public name: string;
  public email: string;
  public phone: string;
  public paymentInfo: string;
  public reservations: Array<Reservation>;
  public isCustomerSet: boolean;

  constructor() {
    this.customerId = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.paymentInfo = "";
    this.reservations = [];
    this.isCustomerSet = false;
  }

  setEmail = (email: string) => {
    this.email = email;
  };

  setCustomer = (
    customerId: string,
    name: string,
    email: string,
    phone: string,
    paymentInfo: string,
    reservations: Array<Reservation>,
  ) => {
    this.customerId = customerId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.paymentInfo = paymentInfo;
    this.reservations = reservations;
    this.isCustomerSet = true;
  };

  clearCustomer = () => {
    this.customerId = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.paymentInfo = "";
    this.reservations = [];
    this.isCustomerSet = false;
  };
}
