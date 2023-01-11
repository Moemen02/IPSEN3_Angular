import {Waste} from "./Waste/waste.model";
import {Customer} from "./customer.model";

export class WasteOrder {
  private _id!: number
  private _articleID!: Waste;
  private _customerID!: Customer;
  private _finished!: boolean;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get articleID(): Waste {
    return this._articleID;
  }

  set articleID(value: Waste) {
    this._articleID = value;
  }

  get finished(): boolean {
    return this._finished;
  }

  set finished(value: boolean) {
    this._finished = value;
  }

  get customerID(): Customer {
    return this._customerID;
  }

  set customerID(value: Customer) {
    this._customerID = value;
  }
}
