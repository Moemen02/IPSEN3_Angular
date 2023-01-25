import {AddressModel} from "./Address.model";

export class Customer {
  private _id!: number
  private _name!: string;
  private _addressID!: AddressModel;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get addressID(): AddressModel {
    return this._addressID;
  }

  set addressID(value: AddressModel) {
    this._addressID = value;
  }
}
