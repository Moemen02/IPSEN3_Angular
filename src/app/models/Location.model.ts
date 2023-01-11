import {Category_location} from "./Category_location.model";

export class Location{
  private _id!: number;
  private _category_locationID!: Category_location;
  private _composition!: string;
  private _requirementID!: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get category_locationID(): Category_location {
    return this._category_locationID;
  }

  set category_locationID(value: Category_location) {
    this._category_locationID = value;
  }

  get composition(): string {
    return this._composition;
  }

  set composition(value: string) {
    this._composition = value;
  }

  get requirementID(): number {
    return this._requirementID;
  }

  set requirementID(value: number) {
    this._requirementID = value;
  }
}
