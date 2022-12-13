import {WasteDataModel} from "./waste-data.model";

export class Waste {
  private _id!: number
  private _waste_dataID!: WasteDataModel;
  private _waste_descriptionID!: string | Object;
  private _UsageID!: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get waste_dataID(): WasteDataModel {
    return this._waste_dataID;
  }

  set waste_dataID(value: WasteDataModel) {
    this._waste_dataID = value;
  }

  get waste_descriptionID(): string | Object {
    return this._waste_descriptionID;
  }

  set waste_descriptionID(value: string | Object) {
    this._waste_descriptionID = value;
  }

  get UsageID(): string {
    return this._UsageID;
  }

  set UsageID(value: string) {
    this._UsageID = value;
  }
}
