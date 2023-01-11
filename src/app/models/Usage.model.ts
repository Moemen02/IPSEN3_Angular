
export class Usage {
  private _id!: number
  private _type_usage!: String;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get type_usage(): String {
    return this._type_usage;
  }

  set type_usage(value: String) {
    this._type_usage = value;
  }
}
