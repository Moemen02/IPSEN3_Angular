import {Waste} from "./Waste/waste.model";

export class WasteOrder {
  private _id!: number
  private _wasteID!: Waste;
  private _customerID!: number;
  private _finished!: boolean;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get wasteID(): Waste {
    return this._wasteID;
  }

  set wasteID(value: Waste) {
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
