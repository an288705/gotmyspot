import Spot from "./interfaces/Spot";

export class HostModel {
  public hostId: string;
  public companyName: string;
  public name: string;
  public email: string;
  public phone: string;
  public paymentInfo: string;
  public spots: Array<Spot>;
  public isHostSet: boolean;

  constructor() {
    this.hostId = "";
    this.companyName = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.paymentInfo = "";
    this.spots = [];
    this.isHostSet = false;
  }

  setHost = (
    hostId: string,
    companyName: string,
    name: string,
    email: string,
    phone: string,
    paymentInfo: string,
    spots: Array<Spot>,
  ) => {
    this.hostId = hostId;
    this.companyName = companyName;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.paymentInfo = paymentInfo;
    this.spots = spots;
    this.isHostSet = true;
  };

  clearHost = () => {
    this.hostId = "";
    this.companyName = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.paymentInfo = "";
    this.spots = [];
    this.isHostSet = false;
  };
}
