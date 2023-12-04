export default interface Reservation {
  id: string;
  hostId: string;
  userId: string;
  address: string;
  startDay: string;
  endDay: string;
  startTime: string;
  endTime: string;
  cost: number;
  isApproved: boolean;
  started: boolean;
  ended: boolean;
}
