import {Article} from "./Waste/article.model";
import {Customer} from "./customer.model";

export class WasteOrder {
  private _id!: number
  private _wasteID!: Article;
  private _customerID!: Customer;
  private _finished!: boolean;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get wasteID(): Article {
    return this._wasteID;
  }

  set wasteID(value: Article) {
    this._wasteID = value;
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
