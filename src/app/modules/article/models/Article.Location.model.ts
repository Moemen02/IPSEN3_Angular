
import {Usage} from "../../../models/Usage.model";
import {Location} from "../../../models/Location.model";
import {Article} from "./article.model";


export class ArticleLocationModel {
  private _id!: number;
  private _locationID!: Location;
  private _articleID!: Article;
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

  get articleID(): Article {
    return this._articleID;
  }

  set articleID(value: Article) {
    this._articleID = value;
  }

  get usageID(): Usage {
    return this._usageID;
  }

  set usageID(value: Usage) {
    this._usageID = value;
  }
}
