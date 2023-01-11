import {Waste} from "./Waste/waste.model";
import {Usage} from "./Usage.model";
import {Location} from "./Location.model";


export class ArticleLocationModel {
  private _id!: number;
  private _locationID!: Location;
  private _articleID!: Waste;
  private _usageID!: Usage;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get locationID(): Location {
    return this._locationID;
  }

  set locationID(value: Location) {
    this._locationID = value;
  }

  get articleID(): Waste {
    return this._articleID;
  }

  set articleID(value: Waste) {
    this._articleID = value;
  }

  get usageID(): Usage {
    return this._usageID;
  }

  set usageID(value: Usage) {
    this._usageID = value;
  }
}
