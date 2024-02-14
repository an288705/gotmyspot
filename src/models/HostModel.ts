export class HostModel {
  public hostId: string;
  public companyName: string;
  public name: string;
  public email: string;
  public phone: string;
  public paymentInfo: string;
  public spotsIds: Array<string>;
  public reservationsIds: Array<string>;
  public isHostSet: boolean;
  public signUpIsDone: boolean;

  constructor() {
    this.hostId = "";
    this.companyName = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.paymentInfo = "";
    this.spotsIds = [];
    this.reservationsIds = [];
    this.isHostSet = false;
    this.signUpIsDone = false;
  }

  setHost = (
    hostId: string,
    companyName: string,
    name: string,
    email: string,
    phone: string,
    paymentInfo: string,
    spotsIds: Array<string>,
    reservationsIds: Array<string>,
    signUpIsDone: boolean,
  ) => {
    this.hostId = hostId;
    this.companyName = companyName;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.paymentInfo = paymentInfo;
    this.spotsIds = spotsIds;
    this.reservationsIds = reservationsIds;
    this.isHostSet = true;
    this.signUpIsDone = signUpIsDone;
  };

  clearHost = () => {
    this.hostId = "";
    this.companyName = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.paymentInfo = "";
    this.spotsIds = [];
    this.reservationsIds = [];
    this.isHostSet = false;
    this.signUpIsDone = false;
  };
}
