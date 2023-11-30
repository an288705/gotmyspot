import Spot from "./interfaces/Spot";

export class HostModel {
  public hostId: string;
  public company: string;
  public name: string;
  public email: string;
  public phone: string;
  public bankInfo: string;
  public spots: Array<Spot>;
  public signedIn: boolean;

  constructor() {
    this.hostId = "";
    this.company = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.bankInfo = "";
    this.spots = [];
    this.signedIn = false;
  }

  signIn = (
    hostId: string,
    company: string,
    name: string,
    email: string,
    phone: string,
    bankInfo: string,
    spots: Array<Spot>,
  ) => {
    this.hostId = hostId;
    this.company = company;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.bankInfo = bankInfo;
    this.spots = spots;
    this.signedIn = true;
  };

  signOut = () => {
    this.hostId = "";
    this.company = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.bankInfo = "";
    this.spots = [];
    this.signedIn = false;
  };
}
