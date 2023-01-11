import {Article} from "./Waste/article.model";

export class WasteOrder {
  private _id!: number
  private _wasteID!: Article;
  private _customerID!: number;
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

  get customerID(): number {
    return this._customerID;
  }

  set customerID(value: number) {
    this._customerID = value;
  }
}
