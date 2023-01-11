export class Category_location{
  private _id!: number;
  private _location_type: string;
  private _requirementID: Array<number>;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get location_type(): string {
    return this._location_type;
  }

  set location_type(value: string) {
    this._location_type = value;
  }


  get requirementID(): Array<number> {
    return this._requirementID;
  }

  set requirementID(value: Array<number>) {
    this._requirementID = value;
  }
}
