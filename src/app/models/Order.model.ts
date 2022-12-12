export class Order {
  private _id!: number
  private _articlenumber!: number;
  private _customerid!: number;
  private _claimed_by!: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get articlenumber(): number {
    return this._articlenumber;
  }

  set articlenumber(value: number) {
    this._articlenumber = value;
  }

  get customerid(): number {
    return this._customerid;
  }

  set customerid(value: number) {
    this._customerid = value;
  }

  get claimed_by(): number {
    return this._claimed_by;
  }

  set claimed_by(value: number) {
    this._claimed_by = value;
  }
}
