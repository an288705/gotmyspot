export class CustomerModel {
  public customerId: string;
  public name: string;
  public email: string;
  public phone: string;
  public bankInfo: string;
  public signedIn: boolean;

  constructor() {
    this.customerId = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.bankInfo = "";
    this.signedIn = false;
  }

  signIn = (
    customerId: string,
    name: string,
    email: string,
    phone: string,
    bankInfo: string,
  ) => {
    this.customerId = customerId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.bankInfo = bankInfo;
    this.signedIn = true;
  };

  signOut = () => {
    this.customerId = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.bankInfo = "";
    this.signedIn = false;
  };
}
