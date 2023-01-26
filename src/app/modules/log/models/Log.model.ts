
export class LogModel {
  private _id!: number
  private _orderID!: number;
  private _userID!: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get orderID(): number {
    return this._orderID;
  }

  set orderID(value: number) {
    this._orderID = value;
  }

  get userID(): number {
    return this._userID;
  }

  set userID(value: number) {
    this._userID = value;
  }
}
