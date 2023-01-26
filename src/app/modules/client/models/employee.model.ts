
export class EmployeeModel {
  private _id!: number
  private _name!: String;
  private _email!: String;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get email(): String {
    return this._email;
  }

  set email(value: String) {
    this._email = value;
  }
}
