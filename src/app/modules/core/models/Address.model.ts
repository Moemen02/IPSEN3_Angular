
export class AddressModel {
  private _id!: number
  private _postal_code!: string;
  private _housenumber!: number;
  private _streetname!: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get postal_code(): string {
    return this._postal_code;
  }

  set postal_code(value: string) {
    this._postal_code = value;
  }

  get housenumber(): number {
    return this._housenumber;
  }

  set housenumber(value: number) {
    this._housenumber = value;
  }

  get streetname(): string {
    return this._streetname;
  }

  set streetname(value: string) {
    this._streetname = value;
  }
}
