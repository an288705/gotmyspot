import Reservation from "./interfaces/Reservation";

export class CustomerModel {
  public customerId: string;
  public name: string;
  public email: string;
  public phone: string;
  public paymentInfo: string;
  public reservationsIds: Array<string>;
  public savedSpotsIds: Array<string>;
  public isCustomerSet: boolean;

  constructor() {
    this.customerId = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.paymentInfo = "";
    this.reservationsIds = [];
    this.savedSpotsIds = [];
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
    reservationsIds: Array<string>,
    savedSpotsIds: Array<string>,
  ) => {
    this.customerId = customerId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.paymentInfo = paymentInfo;
    this.reservationsIds = reservationsIds;
    this.savedSpotsIds = savedSpotsIds;
    this.isCustomerSet = true;
  };

  clearCustomer = () => {
    this.customerId = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.paymentInfo = "";
    this.reservationsIds = [];
    this.savedSpotsIds = [];
    this.isCustomerSet = false;
  };
}
