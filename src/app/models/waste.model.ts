export class Waste {
  private _id!: number
  private _Waste_dataID!: number;
  private _Waste_descriptionID!: string;
  private _UsageID!: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get Waste_dataID(): number {
    return this._Waste_dataID;
  }

  set Waste_dataID(value: number) {
    this._Waste_dataID = value;
  }

  get Waste_descriptionID(): string {
    return this._Waste_descriptionID;
  }

  set Waste_descriptionID(value: string) {
    this._Waste_descriptionID = value;
  }

  get UsageID(): string {
    return this._UsageID;
  }

  set UsageID(value: string) {
    this._UsageID = value;
  }
}
