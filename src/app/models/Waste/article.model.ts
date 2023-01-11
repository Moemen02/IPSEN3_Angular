import {WasteDataModel} from "./waste-data.model";
import {WasteDescriptionModel} from "./waste-description.model";
import {Usage} from "../Usage.model";

export class Article {
  private _id!: number
  private _article_dataID!: WasteDataModel;
  private _article_descriptionID!: WasteDescriptionModel;
  private _usageID!: Usage;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get article_dataID(): WasteDataModel {
    return this._article_dataID;
  }

  set article_dataID(value: WasteDataModel) {
    this._article_dataID = value;
  }

  get article_descriptionID(): WasteDescriptionModel {
    return this._article_descriptionID;
  }

  set article_descriptionID(value: WasteDescriptionModel) {
    this._article_descriptionID = value;
  }

  get usageID(): Usage {
    return this._usageID;
  }

  set usageID(value: Usage) {
    this._usageID = value;
  }
}
